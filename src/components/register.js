import React, { useState } from "react";
import logo from "../icons/logo.png"; // Tell webpack this JS file uses this image
import "../components/login.css";
import "../components/register.css";
import { Link } from "react-router-dom";
import Registrationform from "../components/credentials";

function Register() {
  return (
    <div className="page">
      <div className="login-body ui-fluid">
        <div className="login-panel">
          <div className="login-panel-header">
            <img src={logo} alt="Logo"></img>
          </div>
          <div className="login-panel-content">
            <div className="ui-g-12">
              <Registrationform></Registrationform>
            </div>
          </div>
          <div className="ui-g-12">
            <div className="login_now">
              <span className="account_d">
                Already have an account?{" "}
                <Link to="/login">
                  <span className="login_color">Login </span>
                </Link>{" "}
                now.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
