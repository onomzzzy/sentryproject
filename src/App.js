import React, { useEffect, useReducer } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ErrorPage from "./utility_components/error";
import Home from "./functional_componet/home";
import Header from "./functional_componet/header";
import Login from "./functional_componet/login";
import SideNav from "./functional_componet/sidenav";

export const WebAppContext = React.createContext();

function App() {
  //initial State
  const initialState = {
    screenWidth: window.innerWidth,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "SET_SCREEN_WIDTH":
        state = {
          ...state,
          screenWidth: action.width,
        };
        return state;
      default:
        return initialState;
    }
  };

  useEffect(() => {
    document.getElementById("loader").style.display = "none";
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
        <div className="header">
          <Header size={state.screenWidth} />
        </div>
        <div className="header-sidenav">
          <SideNav size={state.screenWidth} />
        </div>

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
