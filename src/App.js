import "./App.css";
import "./components/CalendarDash/Calendar.css";
import "./wave.css";
import Interface from "./components/Interface";
import React, { useEffect } from "react";
import { getTodos } from "./dataController/fetching";

const App = () => {
  useEffect(() => {
    getTodos();
  }, []);

  return (
    <>
      <Interface />
    </>
  );
};

export default App;
