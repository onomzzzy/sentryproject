import React, { useState } from "react";
import "../css/header.css";
import logo from "../icons/final-sentry.png";
import HeaderLink, { HeaderLinkII } from "./headerLink";

const Header = () => {
  const [inviewhome, setInviewhome] = useState(true);
  const [inviewfeatures, setInviewfeatures] = useState(false);
  const [inviewsolutions, setInviewsolutions] = useState(false);
  const [inviewpricing, setInviewpriving] = useState(false);
  const [inviewaboutus, setInviewaboutus] = useState(false);
  const [inviewnews, setInviewnews] = useState(false);
  const [inviewlogin, setInviewlogin] = useState(false);
  return (
    <div className="header">
      <div className="card">
        <div className="container">
          <div className="row">
            <div className="col-3">
              <div className="header-icon">
                <img src={logo} />
              </div>
            </div>

            <div className="col-9">
              <div className="float-right">
                <div className="row">
                  <div className="col">
                    <HeaderLink name="HOME" inView={inviewhome} />
                  </div>
                  <div className="col">
                    <HeaderLink name="FEATURES" inView={inviewfeatures} />
                  </div>
                  <div className="col">
                    <HeaderLink name="SOLUTIONS" inView={inviewsolutions} />
                  </div>
                  <div className="col">
                    <HeaderLink name="PRICING" inView={inviewpricing} />
                  </div>
                  <div className="col">
                    <HeaderLinkII name="LOGIN" inView={inviewlogin} />
                  </div>
                  <div className="col">
                    <button className="btn btn-sm">GET IN TOUCH</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
