import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import HomeBody from "./HomeBody";

const Interface = () => {
  const [scrollPosition, setScrollPosition] = useState();
  const [state, setState] = useState({
    hamburger: false,
    signUp: false,
  });

  const menuToggle = (input) => {
    let copyState = { ...state };
    copyState[input] = !copyState[input];
    setState(copyState);
    console.log(state, scrollPosition);
  };

  const getAddress = () => {
    let address = window.location.href;
    setState({ ...state, address });
  };

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <>
      <NavBar
        menuToggle={menuToggle}
        hamburger={state.hamburger}
        getAddress={getAddress}
        address={state.address}
        signUp={state.signUp}
        scrollPosition={state.scrollPosition}
      />
      <HomeBody />
    </>
  );
};

export default Interface;
