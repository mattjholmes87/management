import React, { useState } from "react";
import Input from "./Input";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { menuToggle, storeToken } from "../redux/interfaceSlice";
import { selectSchools } from "../redux/usersSlice";
import { toast } from "react-toastify";

const Login = () => {
  const dispatch = useDispatch();
  const [userLoginInput, setUserLoginInput] = useState({});
  const [userSignUpInput, setUserSignUpInput] = useState({});
  const [loginCount, setLoginCount] = useState({ count: 1 });

  const schools = useSelector(selectSchools);
  const state = useSelector((state) => {
    return state.interface;
  });

  const onLoginInput = (e) => {
    setUserLoginInput({ ...userLoginInput, [e.target.name]: e.target.value });
  };

  const onSignUpInput = (e) => {
    setUserSignUpInput({ ...userSignUpInput, [e.target.name]: e.target.value });
    console.log(userSignUpInput);
  };

  const onLoginSubmit = async (e) => {
    e.preventDefault();

    //Send to API
    const { data } = await axios.post(
      "http://localhost:6001/user/login",
      userLoginInput
    );

    if (data.status) {
      localStorage.setItem("token", data.token);
      dispatch(storeToken(data.token));
      dispatch(menuToggle("signUp"));
      toast.success("Logged In!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

      return;
    }
    toast.error("Incorrect Details!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    setLoginCount({ count: loginCount.count + 1 });
  };

  const onSignUpSubmit = async (e) => {
    e.preventDefault();
    // delete from object before submission
    //Send to API
    const { data } = await axios.post(
      "http://localhost:6001/user/post/new",
      userSignUpInput
    );
    console.log(data);
    if (data.status) {
      dispatch(menuToggle("signUp"));
      toast.success("Signed Up!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      localStorage.setItem("token", data.token);
      dispatch(storeToken(data.token));
      return;
    }
    //Something Error?
    toast.error(data.reason, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <>
      <div className={`signupBoxWrap ${state.nav.signUp ? "on" : "off"}`}>
        <div className="loginBox">
          <div className="loginSection">
            <form onInput={onLoginInput} onSubmit={onLoginSubmit}>
              <h2>Login</h2>
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
          </div>
          <div className="signUpBox">
            <form onInput={onSignUpInput} onSubmit={onSignUpSubmit}>
              <h2>Sign Up</h2>
              <Input
                name={"email"}
                type={"email"}
                prefix={"Email Address"}
                placeholder={"Please enter your email address"}
              />
              <Input
                name={"firstname"}
                type={"text"}
                prefix={"First Name"}
                placeholder={"Please enter your first name"}
              />
              <Input
                name={"surname"}
                type={"text"}
                prefix={"Surname"}
                placeholder={"Please enter your surname"}
              />
              <Input
                name={"staffcode"}
                type={"text"}
                prefix={"Staffcode"}
                placeholder={"Please enter your staffcode"}
              />
              <span>School: </span>
              <select className="schoolsDropDown" id="schoolId" name="schoolId">
                <option selected disabled>
                  Please select your school
                </option>
                {schools
                  ? schools.map((school) => {
                      return (
                        <option key={school.schoolId} value={school.schoolId}>
                          {school.school}
                        </option>
                      );
                    })
                  : null}
              </select>
              <Input
                name={"password"}
                type={"password"}
                prefix={"Password"}
                placeholder={"*******"}
              />
              <button className="loginButton">Sign Up</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
