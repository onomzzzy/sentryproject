import React from "react";
import "../css/headerLink.css";

const HeaderLink = (props) => {
  return (
    <div className="header-link">
      {props.inView ? (
        <div className="header-link-name">
          <h6>{props.name}</h6>
        </div>
      ) : (
        <div className="header-link-name-hover">
          <h6>{props.name}</h6>
        </div>
      )}
    </div>
  );
};

export const HeaderLinkII = (props) => {
  return (
    <div className="header-link">
      {props.inView ? (
        <div className="header-link-name colored-link">
          <h6>{props.name}</h6>
        </div>
      ) : (
        <div className="header-link-name-hover colored-link">
          <h6>{props.name}</h6>
        </div>
      )}
    </div>
  );
};

export default HeaderLink;
