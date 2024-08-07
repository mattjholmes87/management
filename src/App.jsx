import "./App.css";
import "./components/CalendarDash/Calendar.css";
import "./wave.css";
import Interface from "./components/Interface";
import React, { useEffect } from "react";
import { getSchools, getTodos } from "./dataController/fetching";
import { useDispatch } from "react-redux";
import { storeToken } from "./redux/interfaceSlice";

const App = () => {
  useEffect(() => {
    getTokenFromStorage();
    getSchools();
  }, []);

  const dispatch = useDispatch();
  const getTokenFromStorage = () => {
    const token = localStorage.getItem("token");
    if (token) {
      dispatch(storeToken(token));
    }
  };

  return (
    <>
      <Interface />
    </>
  );
};

export default App;
