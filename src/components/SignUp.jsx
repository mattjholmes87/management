import React from "react";
import Input from "./Input";
import { useSelector } from "react-redux";

const Login = () => {
  const state = useSelector((state) => {
    return state.interface;
  });

  return (
    <>
      <div className={`signupBoxWrap ${state.nav.signUp ? "on" : "off"}`}>
        <div className="loginBox">
          <div className="loginSection">
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
      </div>
    </>
  );
};

export default Login;
