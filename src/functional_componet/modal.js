import React, { useState, useContext } from "react";
import "../css/modal.css";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { TriStateCheckbox } from "primereact/tristatecheckbox";
import logo from "../icons/send.png";
import { NavContext } from "../App";

const Modal = () => {
  const navContext = useContext(NavContext);

  const [check, setCheck] = useState(null);
  return (
    <div>
      {navContext.navState.modal ? (
        <div className="web-modal">
          <div className="web-modal-content">
            <div className="card">
              <div className="top">
                <span
                  onClick={(e) =>
                    navContext.navDispatch({ type: "TOGGLE_MODAL" })
                  }
                  className="close"
                >
                  &times;
                </span>
                <div className="top-label">
                  <h2>Get in Touch</h2>
                </div>
              </div>
              <div className="modal-body">
                <div>
                  <div className="row">
                    <div className="col-12 col-md-6">
                      <div>
                        <span className="p-float-label">
                          <InputText id="fullname" autoComplete="off" />
                          <label htmlFor="fullname">Full Name</label>
                        </span>
                      </div>
                      <div>
                        <span className="p-float-label">
                          <InputText id="email" autoComplete="off" />
                          <label htmlFor="email">Email</label>
                        </span>
                      </div>
                      <div>
                        <span className="p-float-label">
                          <InputText id="phonenumber" autoComplete="off" />
                          <label htmlFor="phonenumber">
                            Phone Number(Optional)
                          </label>
                        </span>
                      </div>
                      <div>
                        <span className="p-float-label">
                          <InputText id="company" autoComplete="off" />
                          <label htmlFor="company">
                            Company Number(Optional)
                          </label>
                        </span>
                      </div>
                    </div>
                    <div className="col-12 col-md-6">
                      <div>
                        <span className="p-float-label">
                          <InputTextarea
                            autoComplete="off"
                            id="message"
                            rows={5}
                            cols={30}
                            autoResize={true}
                          />
                          <label htmlFor="message">Message....</label>
                        </span>
                      </div>
                      <div>
                        <div className="row">
                          <div className="col-1">
                            <TriStateCheckbox
                              value={check}
                              onChange={(e) => setCheck(e.value)}
                            />
                          </div>
                          <div className="col-11">
                            <div className="privacy">
                              <h6>
                                {" "}
                                I agree to the <a>Terms of Use </a> and{" "}
                                <a>Privacy Policy</a>
                              </h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="btn-send">
                      <button className="btn">
                        Send <img src={logo} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Modal;
