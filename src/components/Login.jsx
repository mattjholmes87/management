import React from "react";
import Input from "./Input";

const Login = () => {
  return (
    <>
      <div className="loginBoxWrap">
        <div className="loginBox">
          <h2>Login</h2>
          <Input
            name={"emailLogin"}
            prefix={"Email Address"}
            placeholder={"Please enter your email address"}
          />
          <Input
            name={"passwordLogin"}
            prefix={"Password"}
            placeholder={"*******"}
          />
          <div></div>
        </div>
        <div className="signUpBox">
          <h2>Sign Up</h2>
          <Input
            name={"emailSignUp"}
            prefix={"Email Address"}
            placeholder={"Please enter your email address"}
          />
          <Input
            name={"passwordSignUp1"}
            prefix={"Password"}
            placeholder={"Please enter your password"}
          />
          <Input
            name={"passwordSignUp2"}
            prefix={"Re-enter your password"}
            placeholder={"Please re-enter your password"}
          />
        </div>
      </div>
    </>
  );
};

export default Login;
