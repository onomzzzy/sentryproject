import React, { useEffect } from "react";
import "./App.css";
import Login from "./components/login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from "./components/register";
import ErrorPage from "./components/error";
import Blogger from "./components/bloger";

function App() {
  useEffect(() => {
    document.getElementById("loader").style.display = "none";
  }, []);
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/blogs" component={Blogger} />
          <Route path="**" component={ErrorPage} />
        </Switch>
      </div>

      <div className="footer">
        <div className="footer_margin">
          <div className="row">
            <div className="col">
              <hr></hr>
            </div>
            <div className="col-auto">
              <p>Copyright © 2020 onomecode.com. All rights reserved</p>
            </div>
            <div className="col">
              <hr></hr>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
