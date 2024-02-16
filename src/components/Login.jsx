import React from "react";

const Login = ({ hamburger }) => {
  return (
    <>
      <div className="loginWrap">
        <div className={`loginBox ${hamburger ? "on" : "off"}`}></div>
      </div>
    </>
    //Create vertical drop down below NavBar, closes on completion.
  );
};

export default Login;
