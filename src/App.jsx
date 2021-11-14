import "./App.css";
import React from "react";
import GlobalCss from "./Assets/GlobalCss";
import "./Assets/Css/pretendardvariable.css";
import Router from "./Router/Router";

const App = () => {
  return (
    <>
      <GlobalCss />
      <Router />
    </>
  );
};

export default App;
