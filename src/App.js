import React, { useEffect } from "react";
import "./App.css";
import "./wave.css";
import Interface from "./components/Interface";
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
