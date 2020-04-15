import React, { useState, useEffect } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import "../components/login.css";
import "../components/register.css";
import Messages from "../components/messages";
import { InputTextarea } from "primereact/inputtextarea";

function Registrationform() {
  const [step, setStep] = useState(0);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [message, setMessage] = useState("");
  const [msgCode, setMsgCode] = useState(0);
  const [callApi, setCallApi] = useState(0);
  const [confirmpassword, setConfirmPassword] = useState("");

  useEffect(() => {
    setStep(step);
  }, [step]);

  useEffect(() => {
    registerUser();
  }, [callApi]);

  const registerUser = async () => {
    const user = {
      id: "",
      username: username,
      password: password,
      role: "USER",
      log: {
        firstname: firstname,
        lastname: lastname,
        avatar: null,
        address: address,
        phonenumber: phonenumber,
        whatsapp: whatsapp,
      },
    };

    const requestHeaders = {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    };

    /*Fetch https://onomecode-security.herokuapp.com/store/records/onomzzzy@gmail.com
     */
    if (callApi === 1) {
      const response = await fetch("/store/users", requestHeaders, {
        mode: "no-cors",
      })
        .then((res) => res.json())
        .then(
          (data) => {
            console.log("result " + data);
            setCallApi(0);
          },
          (error) => {
            console.log("error occured now");
          }
        );
      //const data = await response.json();
      /* const data = await response.json().then(
        (data) => {
          console.log("result " + data);
          setCallApi(0);
        },
        (error) => {
          console.log("error occured now");
        }
      );*/
    }
  };

  function handleUsernameChange(e) {
    setUsername(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handleConfirmPasswordChange(e) {
    setConfirmPassword(e.target.value);
  }

  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
  }

  function handleLastNameChange(e) {
    setLastName(e.target.value);
  }

  function handlePhoneNumberChange(e) {
    setPhoneNumber(e.target.value);
  }

  function handleWhatsappChange(e) {
    setWhatsapp(e.target.value);
  }

  function handleAddressChange(e) {
    setAddress(e.target.value);
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

  function handleFirstNameValidation(e) {
    let validName = e.target.value.match(/^[a-zA-Z\s]{3,}$/);
    if (!validName) {
      setMsgCode(3);
      setMessage("Enter a Valid First Name");
    } else {
      setMsgCode(0);
      setMessage("");
    }
  }

  function handleLastNameValidation(e) {
    let validName = e.target.value.match(/^[a-zA-Z\s-]{3,}$/);
    if (!validName) {
      setMsgCode(3);
      setMessage("Enter a Valid Last Name");
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

  function handleConfirmPasswordValidation(e) {
    if (!(e.target.value === password)) {
      setMsgCode(3);
      setMessage("Password does't match ");
    } else {
      setMsgCode(0);
      setMessage("");
    }
  }

  function handlePhoneNumberValidation(e) {
    let validNumber = e.target.value.match(/^\d{11}$/);
    if (!validNumber) {
      setMsgCode(3);
      setMessage("Enter a valid phone number");
    } else {
      setMsgCode(0);
      setMessage("");
    }
  }

  function handleWhatsappValidation(e) {
    let validNumber = e.target.value.match(/^\d{11}$/);
    if (!validNumber) {
      setMsgCode(3);
      setMessage("Enter a valid whatsapp number");
    } else {
      setMsgCode(0);
      setMessage("");
    }
  }

  function handleAddressValidation(e) {
    let validAddress = e.target.value.match(/^[a-zA-Z0-9\s,.'-]{3,}$/);
    if (!validAddress) {
      setMsgCode(3);
      setMessage("Enter a valid address");
    } else {
      setMsgCode(0);
      setMessage("");
    }
  }

  function handleCredentialValidation(e) {
    e.preventDefault();
    if (msgCode === 0) {
      setStep(1);
    } else {
      setMsgCode(4);
      setMessage("Form has not been filled properly");
    }
  }

  function handleBack(e) {
    e.preventDefault();
    setStep(1);
  }

  function handleBackF(e) {
    e.preventDefault();
    setStep(0);
  }

  function handleNext(e) {
    e.preventDefault();
    if (msgCode === 0) {
      setStep(2);
    } else {
      setMsgCode(3);
      setMessage("Form has not been filled properly");
    }
  }

  function handleRegister(e) {
    e.preventDefault();
    if (msgCode === 0) {
      setCallApi(1);
    } else {
      setMsgCode(3);
      setMessage("Form has not been filled properly");
    }
  }

  switch (step) {
    case 0:
      return (
        <div className="form_animate">
          <div>
            <h1>Credentials</h1>
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
              <span className="p-float-label">
                <InputText
                  id="cpwd"
                  value={confirmpassword}
                  type="password"
                  onBlur={handleConfirmPasswordValidation}
                  onChange={handleConfirmPasswordChange}
                />
                <label htmlFor="cpwd">Confirm Password</label>
              </span>
            </div>

            <div className="ui-g-12">
              <Button
                onClick={handleCredentialValidation}
                label="Personal Info"
                icon="pi pi-user"
                iconPos="right"
              />
            </div>
          </div>
        </div>
      );
    case 1:
      return (
        <div className="form_animate">
          <div>
            <h1>Personal Info</h1>
          </div>
          <Messages message={message} msgCode={msgCode}></Messages>
          <div className="ui-g">
            <div className="ui-g-12">
              <span className="p-float-label">
                <InputText
                  id="fn"
                  value={firstname}
                  onBlur={handleFirstNameValidation}
                  onChange={handleFirstNameChange}
                />
                <label htmlFor="fn">First Name</label>
              </span>
            </div>

            <div className="ui-g-12">
              <span className="p-float-label">
                <InputText
                  id="ln"
                  value={lastname}
                  onBlur={handleLastNameValidation}
                  onChange={handleLastNameChange}
                />
                <label htmlFor="ln">Last Name</label>
              </span>
            </div>

            <div className="ui-g-12">
              <span className="p-float-label">
                <InputText
                  id="pn"
                  value={phonenumber}
                  onBlur={handlePhoneNumberValidation}
                  onChange={handlePhoneNumberChange}
                />
                <label htmlFor="pn">Phone Number</label>
              </span>
            </div>

            <div className="container-fluid">
              <div className="row">
                <div className="col-6">
                  <Button
                    onClick={handleBackF}
                    label="Back"
                    icon="pi pi-lock-open"
                    iconPos="left"
                  />
                </div>

                <div className="col-6">
                  <Button
                    onClick={handleNext}
                    label="Next"
                    icon="pi 
                    pi-user"
                    iconPos="right"
                  />
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
            <h1>Personal Info</h1>
          </div>
          <Messages message={message} msgCode={msgCode}></Messages>
          <div className="ui-g">
            <div className="ui-g-12">
              <span className="p-float-label">
                <InputText
                  id="wap"
                  value={whatsapp}
                  onBlur={handleWhatsappValidation}
                  onChange={handleWhatsappChange}
                />
                <label htmlFor="wap">Whatsapp</label>
              </span>
            </div>

            <div className="ui-g-12">
              <span className="p-float-label">
                <InputTextarea
                  rows={5}
                  cols={30}
                  id="ads"
                  value={address}
                  onBlur={handleAddressValidation}
                  onChange={handleAddressChange}
                />
                <label htmlFor="ads">Address</label>
              </span>
            </div>

            <div className="container-fluid">
              <div className="row">
                <div className="col-6">
                  <Button
                    onClick={handleBack}
                    label="Back"
                    icon="pi pi-lock-open"
                    iconPos="left"
                  />
                </div>

                <div className="col-6">
                  <Button
                    onClick={handleRegister}
                    label="Register"
                    icon="pi pi-user-plus"
                    iconPos="right"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
  }
}
export default Registrationform;
