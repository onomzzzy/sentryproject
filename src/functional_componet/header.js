import React, { useEffect, useReducer, useContext } from "react";
import { Link } from "react-router-dom";
import "../css/header.css";
import logo from "../icons/final-sentry.png";
import HeaderLink, { HeaderLinkII } from "./headerLink";
import { HamburgerArrow } from "react-animated-burgers";
import { NavContext } from "../App";

const Header = () => {
  const navContext = useContext(NavContext);

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

            {navContext.navState.screenWidth <= 991 ? (
              <div className="col-9">
                <div className="float-right">
                  <div className="hamburg">
                    <HamburgerArrow
                      className="hamburger"
                      barColor="#0f75bd"
                      isActive={navContext.navState.sideBar}
                      toggleButton={(e) => {
                        navContext.navDispatch({ type: "TOGGLE_SIDE_BAR" });
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
                          navContext.navDispatch({
                            type: "SET_LINK_STATE",
                            view: "home",
                          })
                        }
                        to="/home"
                      >
                        <HeaderLink
                          name="HOME"
                          inView={navContext.navState.home}
                        />
                      </Link>
                    </div>
                    <div className="col">
                      <HeaderLink
                        name="FEATURES"
                        inView={navContext.navState.features}
                      />
                    </div>
                    <div className="col">
                      <HeaderLink
                        name="SOLUTIONS"
                        inView={navContext.navState.solutions}
                      />
                    </div>
                    <div className="col">
                      <HeaderLink
                        name="PRICING"
                        inView={navContext.navState.pricing}
                      />
                    </div>
                    <div className="col">
                      <Link
                        onClick={(e) =>
                          navContext.navDispatch({
                            type: "SET_LINK_STATE",
                            view: "login",
                          })
                        }
                        to="/login"
                      >
                        <HeaderLinkII
                          name="LOGIN"
                          inView={navContext.navState.login}
                        />
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
