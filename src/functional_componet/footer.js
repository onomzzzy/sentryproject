import React from "react";
import "../css/footer.css";
import stock from "../icons/logo.png";
import facebook from "../icons/facebookW.png";
import instagram from "../icons/instagramW.png";
import twitter from "../icons/twitterW.png";
import email from "../icons/email.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="card">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="stock-exchange push-stock">
                <h3>SentryGRC</h3>
                <div>
                  <img src={stock} />
                </div>
              </div>
            </div>
            <div className="col">
              <div className="about push">
                <h5>Learn About SentryGRC</h5>
                <h6>What is SentryGRC</h6>
                <h6>What's New</h6>
                <h6>Press Release</h6>
                <h6>Blog</h6>
                <h6>Community</h6>
              </div>
            </div>
            <div className="col">
              <div className="help push">
                <h5>help</h5>
                <h6>Contact Us</h6>
                <h6>SentryGRC Career</h6>
                <h6>Knowlege Center</h6>
                <h6>legal</h6>
                <h6>Terms & Condition</h6>
              </div>
            </div>
            <div className="col">
              <div className="social push">
                <button className="btn">Get in Touch</button>
                <h5>Follow Us</h5>
                <div className="row">
                  <div className="col">
                    <img src={facebook} />
                  </div>
                  <div className="col">
                    <img src={instagram} />
                  </div>
                  <div className="col">
                    <img src={twitter} />
                  </div>
                  <div className="col">
                    <img src={email} />
                  </div>
                </div>
                <h6>
                  SentryGRC is an Equal Opportunity Employer: Minority / Women /
                  Disability / Veteran / Gender Identity / Sexual Orientation /
                  Age.
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <h6>
          Privacy | Site Terms | © 2020, SentryGRC, Inc. or its affiliates. All
          rights reserved.
        </h6>
      </div>
    </div>
  );
};

export default Footer;
