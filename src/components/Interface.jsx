import React, { useState } from "react";
import NavBar from "./NavBar";
import HomeBody from "./HomeBody";

const Interface = () => {
  const [state, setState] = useState({
    hamburger: false,
    signUp: false,
  });

  const menuToggle = (input) => {
    let copyState = { ...state };
    copyState[input] = !copyState[input];
    setState(copyState);
    console.log(state);
  };

  const getAddress = () => {
    let address = window.location.href;
    setState({ ...state, address });
  };

  return (
    <>
      <NavBar
        menuToggle={menuToggle}
        hamburger={state.hamburger}
        getAddress={getAddress}
        address={state.address}
        signUp={state.signUp}
      />
      <HomeBody />
    </>
  );
};

export default Interface;
