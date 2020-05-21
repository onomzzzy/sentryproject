import React, { useContext } from "react";
import "../css/sidenav.css";
import { Link } from "react-router-dom";
import MobileNav, { ColoredNav } from "./mobilenav";
import { NavContext } from "../App";

const SideNav = () => {
  const navContext = useContext(NavContext);

  return (
    <div>
      {navContext.navState.sideBar && navContext.navState.screenWidth <= 991 ? (
        <div className="sidenav">
          <div>
            <Link
              to="/home"
              onClick={(e) => {
                navContext.navDispatch({ type: "TOGGLE_SIDE_BAR" });
                navContext.navDispatch({
                  type: "SET_LINK_STATE",
                  view: "home",
                });
              }}
            >
              <MobileNav view="HOME" active={navContext.navState.home} />
            </Link>
          </div>
          <div>
          <Link
              to="/features"
              onClick={(e) => {
                navContext.navDispatch({ type: "TOGGLE_SIDE_BAR" });
                navContext.navDispatch({
                  type: "SET_LINK_STATE",
                  view: "features",
                });
              }}
            >
            <MobileNav view="FEATURE" active={navContext.navState.features} />
            </Link>
          </div>
          <div>
          <Link
              to="/solutions"
              onClick={(e) => {
                navContext.navDispatch({ type: "TOGGLE_SIDE_BAR" });
                navContext.navDispatch({
                  type: "SET_LINK_STATE",
                  view: "solutions",
                });
              }}
            >
            <MobileNav
              view="SOLUTIONS"
              active={navContext.navState.solutions}
            />
            </Link>
          </div>
          <div>
          <Link
              to="/pricing"
              onClick={(e) => {
                navContext.navDispatch({ type: "TOGGLE_SIDE_BAR" });
                navContext.navDispatch({
                  type: "SET_LINK_STATE",
                  view: "pricing",
                });
              }}
            >
            <MobileNav view="PRICING" active={navContext.navState.pricing} />
            </Link>
          </div>
          <div>
            <Link
              to="/login"
              onClick={(e) => {
                navContext.navDispatch({ type: "TOGGLE_SIDE_BAR" });
                navContext.navDispatch({
                  type: "SET_LINK_STATE",
                  view: "login",
                });
              }}
            >
              <ColoredNav view="LOGIN" active={navContext.navState.login} />
            </Link>
          </div>
          <div>
            <button
              onClick={(e) => {
                navContext.navDispatch({ type: "TOGGLE_SIDE_BAR" });
                navContext.navDispatch({ type: "TOGGLE_MODAL" });
              }}
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
