import React, { useEffect, useReducer } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ErrorPage from "./utility_components/error";
import Home from "./functional_componet/home";
import Header from "./functional_componet/header";
import Login from "./functional_componet/login";
import SideNav from "./functional_componet/sidenav";
import Modal from "./functional_componet/modal";

export const WebAppContext = React.createContext();

export const NavContext = React.createContext();

function App() {
  //initial State
  const initialState = {
    screenWidth: window.innerWidth,
    sideBar: false,
    modal: false,
    currentLink: window.location.pathname.toString().replace("/", ""),
    home: false,
    login: false,
    pricing: false,
    features: false,
    solutions: false,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "SET_SCREEN_WIDTH":
        state = {
          ...state,
          screenWidth: action.width,
        };
        return state;
      case "TOGGLE_SIDE_BAR":
        state = {
          ...state,
          sideBar: !state.sideBar,
        };
        return state;
      case "SET_LINK_STATE":
        state = {
          ...state,
          [state.currentLink]: false,
          [action.view]: true,
          currentLink: action.view,
        };
        return state;
      case "SET_LINK_STATE_INITIAL":
        state = {
          ...state,
          [action.view]: true,
          currentLink: action.view,
        };
        return state;
      case "TOGGLE_MODAL":
        state = {
          ...state,
          modal: !state.modal,
        };
        return state;
      default:
        return initialState;
    }
  };

  useEffect(() => {
    document.getElementById("loader").style.display = "none";
  }, []);

  useEffect(() => {
    dispatch({
      type: "SET_LINK_STATE_INITIAL",
      view: window.location.pathname.toString().replace("/", ""),
    });
  }, []);

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const handleResize = () =>
      dispatch({ type: "SET_SCREEN_WIDTH", width: window.innerWidth });
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  //Get Post From Server
  /******* */

  //GetPost from Server Ends...

  return (
    <Router>
      <div className="app">
        <NavContext.Provider value={{ navState: state, navDispatch: dispatch }}>
          <div className="header">
            <Header />
          </div>

          <div className="header-sidenav">
            <SideNav />
          </div>

          <div className="app-modal">
            <Modal />
          </div>
        </NavContext.Provider>

        <div id="main">
          <WebAppContext.Provider
            value={{ webAppState: state, webAppDispatch: dispatch }}
          >
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/home" component={Home} />
              <Route path="/login" component={Login} />
              <Route path="**" component={ErrorPage} />
            </Switch>
          </WebAppContext.Provider>
        </div>
      </div>
    </Router>
  );
}

export default App;
