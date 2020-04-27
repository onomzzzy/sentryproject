import React, { useEffect, useReducer } from "react";
import axios from "axios";
import "../components/login.css";
import usericon from "../icons/user.png"; // Tell webpack this JS file uses this image
import groupicon from "../icons/group.png"; // Tell webpack this JS file uses this image
import lefticon from "../icons/left-arrow.png"; // Tell webpack this JS file uses this image
import leftIcon from "../icons/left-arrow1.png"; // Tell webpack this JS file uses this image
import nexticon from "../icons/next.png"; // Tell webpack this JS file uses this image
import "../components/register.css";
import Messages from "../components/messages";
import { ProgressSpinner } from "primereact/progressspinner";

const uri = "http://localhost:8080/store/users";
const url = "http://localhost:4000/api/salt";

const reducer = (state, action) => {
  switch (action.type) {
    case "REG_CONTENT":
      state = {
        ...state,
        [action.name]: action.value.content,
      };
      return state;
    case "REG_ORIGIN":
      state = {
        ...state,
        step: 0,
      };
      return state;
    case "REG_CREDENTIALS":
      state = {
        ...state,
        step: 1,
      };
      return state;
    case "REG_PERSONAL_LOG_1":
      state = {
        ...state,
        step: 2,
      };
      return state;
    case "REG_PERSONAL_LOG_2":
      state = {
        ...state,
        loading: true,
      };
      return state;
    case "REG_MSG":
      state = {
        ...state,
        message: action.message,
        msgCode: action.msgCode,
      };
      return state;
    case "REG_SUCCESS_FAILURE":
      state = {
        ...state,
        message: action.message,
        msgCode: action.msgCode,
        loading: false,
      };
      return state;
    default:
      return state;
  }
};

function Registrationform() {
  const saltPassword = async (usr) => {
    axios
      .put(url, usr)
      .then((res) => {
        let pwd = JSON.stringify(res.data);
        let user = {
          ...usr,
          password: pwd,
        };
        reg(user);
      })
      .catch((err) => {
        dispatch({
          type: "REG_SUCCESS_FAILURE",
          message: "Registration Successful",
          msgCode: 1,
        });
      });
  };

  const reg = async (usr) => {
    axios
      .put(uri, usr)
      .then((res) => {
        if (res.data) {
          dispatch({
            type: "REG_SUCCESS_FAILURE",
            message: "Registration Successful",
            msgCode: 1,
          });
        } else {
          dispatch({
            type: "REG_SUCCESS_FAILURE",
            message: `Registration Failed. ${usr.username} is already a user`,
            msgCode: 4,
          });
        }
      })
      .catch((err) => {
        dispatch({
          type: "REG_SUCCESS_FAILURE",
          message: "Something went wrong. Please check your connection",
          msgCode: 3,
        });
      });
  };

  const initialState = {
    step: 0,
    username: "",
    password: "",
    firstname: "",
    lastname: "",
    phonenumber: "",
    whatsapp: "",
    address: "",
    message: "",
    msgCode: 0,
    loading: false,
    confirmpassword: "",
  };

  const registerUser = async () => {
    const user = {
      id: "",
      username: state.username,
      password: state.password,
      role: "USER",
      log: {
        firstname: state.firstname,
        lastname: state.lastname,
        avatar: null,
        address: state.address,
        phonenumber: state.phonenumber,
        whatsapp: state.whatsapp,
      },
    };

    //Salt Password
    await saltPassword(user);
  };

  function handleUsernameValidation(name) {
    let validUserName = name.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
    if (validUserName) {
      return true;
    }
    return false;
  }

  function callMsg(msg, msc) {
    dispatch({ type: "REG_MSG", message: msg, msgCode: msc });
  }

  function handleValidation(e) {
    dispatch({
      type: "REG_CONTENT",
      name: e.target.id,
      value: {
        content: e.target.value,
      },
    });
    switch (e.target.id) {
      case "username":
        {
          let valid = handleUsernameValidation(e.target.value);
          if (!valid) {
            callMsg("Invalid Username", 4);
          } else {
            callMsg("", 0);
          }
        }
        break;
      case "password":
        {
          let valid = handlePasswordValidation(e.target.value);
          if (!valid) {
            callMsg("Password must be more than 5 character", 3);
          } else {
            callMsg("", 0);
          }
        }
        break;
      case "confirmpassword":
        {
          let valid = handlePasswordConfirmationValidation(
            state.password,
            e.target.value
          );
          if (!valid) {
            callMsg("Password does not match", 3);
          } else {
            callMsg("", 0);
          }
        }
        break;
      case "firstname":
        {
          let valid = handleNameValidation(e.target.value);
          if (!valid) {
            callMsg("Enter a valid first name", 3);
          } else {
            callMsg("", 0);
          }
        }
        break;
      case "lastname":
        {
          let valid = handleNameValidation(e.target.value);
          if (!valid) {
            callMsg("Enter a valid last name", 4);
          } else {
            callMsg("", 0);
          }
        }
        break;
      case "phonenumber":
        {
          let valid = handlePhoneNumberValidation(e.target.value);
          if (!valid) {
            callMsg("Phone number not valid", 4);
          } else {
            callMsg("", 0);
          }
        }
        break;
      case "whatsapp":
        {
          let valid = handlePhoneNumberValidation(e.target.value);
          if (!valid) {
            callMsg("Whatsapp number not valid", 3);
          } else {
            callMsg("", 0);
          }
        }
        break;
      default: {
        let valid = handleAddressValidation(e.target.value);
        if (!valid) {
          callMsg("Enter a valid address", 4);
        } else {
          callMsg("", 0);
        }
      }
    }
  }

  function handleNameValidation(name) {
    let validName = name.match(/^[a-zA-Z\s]{3,}$/);
    if (validName) {
      return true;
    }
    return false;
  }

  function handlePasswordValidation(password) {
    if (password.length > 5) {
      return true;
    }
    return false;
  }

  function handlePasswordConfirmationValidation(password, confirmpassword) {
    if (password === confirmpassword) {
      return true;
    }
    return false;
  }

  function handlePhoneNumberValidation(phonenumber) {
    let validNumber = phonenumber.match(/^\d{11}$/);
    if (validNumber) {
      return true;
    }
    return false;
  }

  function handleAddressValidation(address) {
    let validAddress = address.match(/^[a-zA-Z0-9\s,.'-]{3,}$/);
    if (validAddress) {
      return true;
    }
    return false;
  }

  function goBack(e) {
    console.log(`button clicked ${e.target.id}`);
    console.log(`current state ${JSON.stringify(state)}`);
    if (e.target.id === "10") {
      dispatch({ type: "REG_ORIGIN" });
    } else {
      dispatch({ type: "REG_CREDENTIALS" });
    }
  }

  function handleFormValidation(e) {
    e.preventDefault();
    switch (e.target.id) {
      case "0":
        {
          let crosscheck = false;
          crosscheck = handleUsernameValidation(state.username);
          crosscheck = handlePasswordValidation(state.password);
          crosscheck = handlePasswordConfirmationValidation(
            state.password,
            state.confirmpassword
          );
          if (crosscheck) {
            dispatch({ type: "REG_CREDENTIALS" });
          } else {
            dispatch({
              type: "REG_MSG",
              message: "Form not properly Filled",
              msgCode: 4,
            });
          }
        }
        break;
      case "1":
        {
          let crosscheck = false;
          crosscheck = handleNameValidation(state.firstname);
          crosscheck = handleNameValidation(state.lastname);
          crosscheck = handlePhoneNumberValidation(state.phonenumber);
          if (crosscheck) {
            dispatch({ type: "REG_PERSONAL_LOG_1" });
          } else {
            dispatch({
              type: "REG_MSG",
              message: "Form not properly Filled",
              msgCode: 4,
            });
          }
        }
        break;
      case "2":
        {
          let crosscheck = false;
          crosscheck = handlePhoneNumberValidation(state.whatsapp);
          crosscheck = handleAddressValidation(state.address);
          if (crosscheck) {
            dispatch({ type: "REG_PERSONAL_LOG_2" });
            registerUser();
          } else {
            dispatch({
              type: "REG_MSG",
              message: "Form not properly Filled",
              msgCode: 4,
            });
          }
        }
        break;
      default:
        dispatch({ type: "REG_ORIGIN" });
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  switch (state.step) {
    case 0:
      return (
        <div className="form_animate">
          <div>
            <h1>Credentials</h1>
          </div>
          <Messages message={state.message} msgCode={state.msgCode}></Messages>
          <div className="ui-g">
            <div className="ui-g-12">
              <div className="input-field">
                <input
                  type="text"
                  id="username"
                  value={state.username}
                  onChange={handleValidation}
                  required
                />
                <label htmlFor="username">Username</label>
              </div>
            </div>

            <div className="ui-g-12">
              <div className="input-field">
                <input
                  type="password"
                  id="password"
                  value={state.password}
                  onChange={handleValidation}
                  required
                />
                <label htmlFor="password">Password</label>
              </div>
            </div>

            <div className="ui-g-12">
              <div className="input-field">
                <input
                  type="password"
                  id="confirmpassword"
                  value={state.confirmpassword}
                  onChange={handleValidation}
                  required
                />
                <label htmlFor="confirmpassword">Confirm Password</label>
              </div>
            </div>

            <div className="ui-g-12">
              <button
                type="button"
                id="0"
                onClick={handleFormValidation}
                className="btn btn-sm"
              >
                Personal Log <img src={usericon}></img>
              </button>
            </div>
          </div>
        </div>
      );
    case 1:
      return (
        <div className="form_animate">
          <div>
            <h1>Personal Log</h1>
          </div>
          <Messages message={state.message} msgCode={state.msgCode}></Messages>
          <div className="ui-g">
            <div className="ui-g-12">
              <div className="input-field">
                <input
                  type="text"
                  id="firstname"
                  value={state.firstname}
                  onChange={handleValidation}
                  required
                />
                <label htmlFor="firstname">First Name</label>
              </div>
            </div>

            <div className="ui-g-12">
              <div className="input-field">
                <input
                  type="text"
                  id="lastname"
                  value={state.lastname}
                  onChange={handleValidation}
                  required
                />
                <label htmlFor="lastname">Last Name</label>
              </div>
            </div>

            <div className="ui-g-12">
              <div className="input-field">
                <input
                  type="text"
                  id="phonenumber"
                  value={state.phonenumber}
                  onChange={handleValidation}
                  required
                />
                <label htmlFor="phonenumber">Phone Number</label>
              </div>
            </div>

            <div className="container-fluid">
              <div className="row">
                <div className="col-6">
                  <button
                    type="button"
                    id="10"
                    onClick={goBack}
                    className="btn btn-sm"
                  >
                    <img className="left_icon" src={lefticon}></img>Back
                  </button>
                </div>

                <div className="col-6">
                  <button
                    type="button"
                    id="1"
                    onClick={handleFormValidation}
                    className="btn btn-sm"
                  >
                    Next <img src={nexticon}></img>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    case 2:
      return (
        <div className="form_animate">
          <div>
            <h1>Personal Log</h1>
          </div>
          <Messages message={state.message} msgCode={state.msgCode}></Messages>
          <div>
            {state.loading ? (
              <ProgressSpinner
                style={{ width: "30px", height: "30px", float: "right" }}
                strokeWidth="5"
                fill="transparent"
                animationDuration=".5s"
              />
            ) : (
              <div></div>
            )}
          </div>
          <div className="ui-g">
            <div className="ui-g-12">
              <div className="input-field">
                <input
                  type="text"
                  id="whatsapp"
                  value={state.whatsapp}
                  onChange={handleValidation}
                  required
                />
                <label htmlFor="whatsapp">Whatsapp Number</label>
              </div>
            </div>

            <div className="ui-g-12">
              <div className="input-field">
                <textarea
                  type="text"
                  id="address"
                  value={state.address}
                  onChange={handleValidation}
                  required
                />
                <label htmlFor="address">Address</label>
              </div>
            </div>

            <div className="container-fluid">
              <div className="row">
                <div className="col-6">
                  <button
                    type="button"
                    id="20"
                    onClick={goBack}
                    className="btn btn-sm"
                  >
                    <img className="left_icon" src={leftIcon}></img> Back
                  </button>
                </div>

                <div className="col-6">
                  <button
                    type="button"
                    id="2"
                    onClick={handleFormValidation}
                    className="btn btn-sm"
                  >
                    Register <img src={groupicon}></img>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
  }
}
export default Registrationform;
