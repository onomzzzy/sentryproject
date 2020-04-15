import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import logo from "../icons/logo.png"; // Tell webpack this JS file uses this image
import "../components/login.css";
import { Link } from "react-router-dom";
import Messages from "../components/messages";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [message, setMessage] = useState("");
  const [msgCode, setMsgCode] = useState(0);

  function handleUsernameChange(e) {
    setUsername(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handleUserValidation(e) {
    let validEmail = e.target.value.match(
      /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i
    );
    if (!validEmail) {
      setMsgCode(4);
      setMessage("Username must be a valid email");
    } else {
      setMsgCode(0);
      setMessage("");
    }
  }

  function handlePasswordValidation(e) {
    if (e.target.value.length < 7) {
      setMsgCode(3);
      setMessage("Password must be greater than 6 characters");
    } else {
      setMsgCode(0);
      setMessage("");
    }
  }

  return (
    <div className="page">
      <div className="login-body ui-fluid">
        <div className="login-panel">
          <div className="login-panel-header">
            <img src={logo} alt="Logo"></img>
          </div>
          <div className="login-panel-content">
            <div className="ui-g-12">
              <h1>Sign-in with Onome Code</h1>
            </div>
            <Messages message={message} msgCode={msgCode}></Messages>
            <div className="ui-g">
              <div className="ui-g-12">
                <span className="p-float-label">
                  <InputText
                    id="usr"
                    value={username}
                    onBlur={handleUserValidation}
                    onChange={handleUsernameChange}
                  />
                  <label htmlFor="usr">Username</label>
                </span>
              </div>

              <div className="ui-g-12">
                <span className="p-float-label">
                  <InputText
                    id="pwd"
                    value={password}
                    type="password"
                    onBlur={handlePasswordValidation}
                    onChange={handlePasswordChange}
                  />
                  <label htmlFor="pwd">Password</label>
                </span>
              </div>

              <div className="ui-g-12">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-7">
                      <div>
                        <label className="container">
                          <input
                            type="checkbox"
                            checked={remember}
                            onChange={() => setRemember(!remember)}
                          />
                          <span className="checkmark"></span>
                          <span className="rme">Remember Me ?</span>
                        </label>
                      </div>
                    </div>
                    <div className="col-5">
                      <a className="reset_pwd" href="">
                        Reset Password
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ui-g-12">
                <Button label="Login" icon="pi pi-unlock" iconPos="right" />
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
    </div>
  );
}

const credentials = {
  username: "",
  password: "",
};

export default Login;
