import React from "react";
import Input from "../Input";
import axios from "axios";

const SignUpFullPage = () => {
  const [userInput, setUserInput] = useState({});

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
    console.log(data);
  };

  console.log(userInput);

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
          <div className="loginFooter">Sign-Up Here!</div>
          <div className="loginFooter">Forgotten Password?</div>
        </div>
      </div>
    </>
  );
};

export default SignUpFullPage;
