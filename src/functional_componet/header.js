import React, { useEffect, useReducer, useContext } from "react";
import { Link } from "react-router-dom";
import "../css/header.css";
import logo from "../icons/final-sentry.png";
import HeaderLink, { HeaderLinkII } from "./headerLink";
import { HamburgerArrow } from "react-animated-burgers";
import { NavContext } from "../App";

const Header = (props) => {
  const navContext = useContext(NavContext);

  const initialLink = {
    currentLink: window.location.pathname.toString().replace("/", ""),
    home: false,
    login: false,
    pricing: false,
    features: false,
    solutions: false,
    hamburger: navContext.navState.sideBar,
  };

  useEffect(() => {
    dispatch({
      type: "SET_LINK_STATE",
      view: window.location.pathname.toString().replace("/", ""),
    });
  }, []);

  const reducer = (state, action) => {
    switch (action.type) {
      case "SET_LINK_STATE":
        state = {
          ...state,
          [state.currentLink]: false,
          [action.view]: true,
          currentLink: action.view,
        };
        return state;
      case "HAMBURGER":
        state = {
          ...state,
          hamburger: !state.hamburger,
        };
        return state;
      default:
        return initialLink;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialLink);

  return (
    <div className="header">
      <div className="card">
        <div className="container">
          <div className="row">
            <div className="col-3">
              <div className="header-icon">
                <img src={logo} />
              </div>
            </div>

            {props.size <= 991 ? (
              <div className="col-9">
                <div className="float-right">
                  <div className="hamburg">
                    <HamburgerArrow
                      className="hamburger"
                      barColor="#0f75bd"
                      isActive={state.hamburger}
                      toggleButton={(e) => {
                        navContext.navDispatch({ type: "TOGGLE_SIDE_BAR" });
                        dispatch({ type: "HAMBURGER" });
                      }}
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div className="col-9">
                <div className="float-right">
                  <div className="row">
                    <div className="col">
                      <Link
                        id="home"
                        onClick={(e) =>
                          dispatch({
                            type: "SET_LINK_STATE",
                            view: "home",
                          })
                        }
                        to="/home"
                      >
                        <HeaderLink name="HOME" inView={state.home} />
                      </Link>
                    </div>
                    <div className="col">
                      <HeaderLink name="FEATURES" inView={state.features} />
                    </div>
                    <div className="col">
                      <HeaderLink name="SOLUTIONS" inView={state.solutions} />
                    </div>
                    <div className="col">
                      <HeaderLink name="PRICING" inView={state.pricing} />
                    </div>
                    <div className="col">
                      <Link
                        onClick={(e) =>
                          dispatch({
                            type: "SET_LINK_STATE",
                            view: "login",
                          })
                        }
                        to="/login"
                      >
                        <HeaderLinkII name="LOGIN" inView={state.login} />
                      </Link>
                    </div>
                    <div className="col">
                      <button
                        onClick={(e) =>
                          navContext.navDispatch({ type: "TOGGLE_MODAL" })
                        }
                        className="btn btn-sm"
                      >
                        GET IN TOUCH
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
