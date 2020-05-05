import React, { useContext } from "react";
import "../css/homecontent.css";
import { WebAppContext } from "../App";

const HomeContent = (props) => {
  const webAppContext = useContext(WebAppContext);

  return (
    <div className="home-content">
      <div className="container">
        {webAppContext.webAppState.screenWidth > 991 ? (
          <div className="desktop">
            {props.position === "0" ? (
              <div className="row">
                <div className="col-12">
                  <div className="card home-feeds">
                    <div className="row">
                      <div className="col-5">
                        <div className="feed-img">
                          <img src={props.pixs} />
                        </div>
                      </div>
                      <div className="col-7">
                        <div className="feed-left">
                          <div className="row">
                            <div className="col-1">
                              <div className="v-divider" />
                            </div>
                            <div className="col-11">
                              <div className="feed-txt">
                                <h2>“{props.writeUp}”</h2>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="row">
                <div className="col-12">
                  <div className="card home-feeds">
                    <div className="row">
                      <div className="col-7">
                        <div className="feed-right">
                          <div className="row">
                            <div className="col-1">
                              <div className="v-divider" />
                            </div>
                            <div className="col-11">
                              <div className="feed-txt">
                                <h2>“{props.writeUp}”</h2>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-5">
                        <div className="feed-img">
                          <img src={props.pixs} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="for-mobile">
            <div className="row">
              <div className="col-12">
                <div className="home-feeds mobile">
                  <div className="row">
                    <div className="col-12">
                      <div className="feed-img">
                        <img src={props.pixs} />
                      </div>

                      <div className=" card feed-mobile">
                        <div className="row">
                          <div className="col-1">
                            <div className="v-divider" />
                          </div>
                          <div className="col-11">
                            <div className="feed-txt">
                              <h4>“{props.writeUp}”</h4>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomeContent;
