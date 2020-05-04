import React from "react";
import logo from "../icons/404.svg"; // Tell webpack this JS file uses this image
import "../css/error.css";
const ErrorPage = () => {
  return (
    <div className="page">
      <div className="exception-body notfound">
        <div className="exception-panel">
          <div className="exception-code">
            <img src={logo} alt="" />
          </div>

          <div className="exception-detail">
            <div className="exception-icon">
              <i className="pi pi-times"></i>
            </div>
            <h1>PAGE NOT FOUND</h1>
            <p>
              Please contact our Customer care representative for more
              information
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
