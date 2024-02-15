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

  return (
    <>
      <Nav menuToggle={menuToggle} hamburger={state.hamburger} />
      <HomeBody />
    </>
  );
};

export default Interface;
