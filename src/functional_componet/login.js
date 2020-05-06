import React from "react";
import "../css/login.css";
import logo from "../icons/icon.png";
import { Link } from "react-router-dom";
import lockicon from "../icons/unlock.png";
import { InputText } from "primereact/inputtext";
import Footer from "../functional_componet/footer";

const Login = () => {
  return (
    <div className="login">
      <div className="login-body ui-fluid">
        <div className="login-panel">
          <div className="login-panel-header">
            <img src={logo} alt="Logo"></img>
          </div>
          <div className="login-panel-content">
            <div className="ui-g-12">
              <h1>Sign into SentryGRC Network</h1>
            </div>

            <div className="ui-g">
              <div className="ui-g-12">
                <div className="input-field">
                  <span className="p-float-label">
                    <InputText id="username" autoComplete="off" />
                    <label htmlFor="username">Username</label>
                  </span>
                </div>
              </div>

              <div className="ui-g-12">
                <div className="input-field">
                  <span className="p-float-label">
                    <InputText
                      id="password"
                      type="password"
                      autoComplete="off"
                    />
                    <label htmlFor="password">Password</label>
                  </span>
                </div>
              </div>
              <div className="ui-g-12">
                <button type="button" className="btn btn-sm">
                  Login <img src={lockicon}></img>
                </button>
              </div>

              <div className="ui-g-12">
                <span className="account_d">
                  Don't have an account?{" "}
                  <Link to="/register">
                    <span>Sign Up</span>
                  </Link>{" "}
                  now.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Login;
