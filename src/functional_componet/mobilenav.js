import React from "react";
import "../css/mobilenav.css";

const MobileNav = (props) => {
  return (
    <div className="mobile-nav">
      <div className="container">
        {props.active ? (
          <div className="row">
            <div className="col-9">
              <h5>{props.view}</h5>
            </div>
            <div className="col-3">
              <div className="colored-divider"></div>
            </div>
          </div>
        ) : (
          <div className="row">
            <div className="col-9">
              <div className="inactive">
                <h5>{props.view}</h5>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export const ColoredNav = (props) => {
  return (
    <div className="mobile-nav">
      <div className="container">
        {props.active ? (
          <div className="row">
            <div className="col-9">
              <div className="colored">
                <h5>{props.view}</h5>
              </div>
            </div>
            <div className="col-3">
              <div className="colored-divider"></div>
            </div>
          </div>
        ) : (
          <div className="row">
            <div className="col-9">
              <div className="inactive-colored">
                <h5>{props.view}</h5>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MobileNav;
