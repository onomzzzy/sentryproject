import React from "react";
import "../css/homestaticcarousel.css";

const HomeCarousel = () => {
  return (
    <div className="home-carousel">
      <div className="carousel-background">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="carousel-text">
                <h2>
                  With SentryGRC you now have a better way of managing your
                  Governance, Risk and Compliance
                </h2>
                <h6>
                  Instead of using folders, spreadsheets, calendar reminders,
                  etc.
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="carousel-footer">
        <div className="card">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h5>
                  Manage your Governance, risk and compliance with SentryGRC
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCarousel;
