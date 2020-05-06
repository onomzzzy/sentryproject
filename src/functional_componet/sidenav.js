import React, { useEffect, useReducer, useContext } from "react";
import "../css/sidenav.css";
import { Link } from "react-router-dom";
import MobileNav, { ColoredNav } from "./mobilenav";
import { NavContext } from "../App";

const SideNav = () => {
  const navContext = useContext(NavContext);
  console.log(`from side ${navContext.navState.sideBar}`);

  const initialLink = {
    currentLink: window.location.pathname.toString().replace("/", ""),
    home: false,
    login: false,
    pricing: false,
    features: false,
    solutions: false,
    navstate: navContext.navState.sideBar,
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
      default:
        return initialLink;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialLink);

  return (
    <div>
      {navContext.navState.sideBar && navContext.navState.screenWidth <= 991 ? (
        <div className="sidenav">
          <div>
            <Link
              to="/home"
              onClick={(e) =>
                dispatch({
                  type: "SET_LINK_STATE",
                  view: "home",
                })
              }
            >
              <MobileNav view="HOME" active={state.home} />
            </Link>
          </div>
          <div>
            <MobileNav view="FEATURE" active={state.features} />
          </div>
          <div>
            <MobileNav view="SOLUTIONS" active={state.solutions} />
          </div>
          <div>
            <MobileNav view="PRICING" active={state.pricing} />
          </div>
          <div>
            <Link
              to="/login"
              onClick={(e) =>
                dispatch({
                  type: "SET_LINK_STATE",
                  view: "login",
                })
              }
            >
              <ColoredNav view="LOGIN" active={state.login} />
            </Link>
          </div>
          <div>
            <button
              onClick={(e) => navContext.navDispatch({ type: "TOGGLE_MODAL" })}
              className="btn btn-sm"
            >
              GET IN TOUCH
            </button>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default SideNav;
