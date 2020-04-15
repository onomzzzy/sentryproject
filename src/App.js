import React from "react";
import "./App.css";
import Login from "./components/login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from "./components/register";
import ErrorPage from "./components/error";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="**" component={ErrorPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
