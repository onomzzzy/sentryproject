import React, { useState, useEffect } from "react";
import "../App.css";
function Messages(props) {
  const [message, setMessage] = useState(props.message);
  const [msgCode, setMsgCode] = useState(props.msgCode);

  useEffect(() => {
    setMessage(props.message);
    setMsgCode(props.msgCode);
  }, [props.msgCode]);

  switch (msgCode) {
    case 0:
      return <div></div>;
    case 1:
      return (
        <div className="alert alert-success" role="alert">
          {" "}
          {message}
        </div>
      );
    case 2:
      return (
        <div className="alert alert-info" role="alert">
          {" "}
          {message}
        </div>
      );
    case 3:
      return (
        <div className="alert alert-warning" role="alert">
          {" "}
          {message}
        </div>
      );
    case 4:
      return (
        <div className="alert alert-danger" role="alert">
          {" "}
          {message}
        </div>
      );
  }
}

export default Messages;
