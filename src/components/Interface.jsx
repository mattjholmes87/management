import React, { useState } from "react";
import Nav from "./Nav";
import HomeBody from "./HomeBody";

const Interface = () => {
  const [state, setState] = useState({ holder: true, hamburger: false });

  const menuToggle = () => {
    state.hamburger
      ? setState({ ...state, hamburger: false })
      : setState({ ...state, hamburger: true });
  };

  const getAddress = () => {
    let address = window.location.href;
    setState({ ...state, address });
  };

  return (
    <>
      <Nav
        menuToggle={menuToggle}
        hamburger={state.hamburger}
        getAddress={getAddress}
        address={state.address}
      />
      <HomeBody />
    </>
  );
};

export default Interface;
