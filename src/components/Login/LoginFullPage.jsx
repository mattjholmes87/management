import React, { useState } from "react";
import Input from "../Input";
import axios from "axios";
import { selectToken, storeToken } from "../../redux/interfaceSlice";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const LoginFullPage = () => {
  const dispatch = useDispatch();

  const [userInput, setUserInput] = useState({});
  const [loginCount, setLoginCount] = useState({ count: 1 });

  const token = useSelector(selectToken);

  const onInput = (e) => {
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    //Send to API
    const { data } = await axios.post(
      "http://localhost:6001/user/login",
      userInput
    );

    if (data.status) {
      localStorage.setItem("token", data.token);
      dispatch(storeToken(data.token));
      //redirect here
      return;
    }
    setLoginCount({ count: loginCount.count + 1 });
  };

  const logout = async () => {
    await axios.delete("http://localhost:6001/user/login", {
      headers: { token: localStorage.getItem("token") },
    });
    localStorage.removeItem("token");
    dispatch(storeToken(null));
  };

  if (token) {
    return <Navigate replace to="/OverviewDash" />;
  } else {
    return (
      <>
        <div className="loginBackground">
          <div className="loginCase">
            <div>Login</div>
            <form onInput={onInput} onSubmit={onSubmit}>
              <Input
                name={"email"}
                type={"email"}
                prefix={"Email Address"}
                placeholder={"Please enter your email address"}
              />
              <Input
                name={"password"}
                type={"password"}
                prefix={"Password"}
                placeholder={"*******"}
              />
              <button className="loginButton">Login</button>
            </form>
            <div className="loginFooter Error">
              {loginCount.count >= 2 ? "Incorrect Username or Password" : ""}
            </div>
            <div className="loginFooter">Sign-Up Here!</div>
            <div className="loginFooter">Forgotten Password?</div>
            <button className="loginButton" onClick={logout}>
              Logout
            </button>
          </div>
        </div>
      </>
    );
  }
};

export default LoginFullPage;
