import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MainPage from "../Pages/MainPage";
import TestPage from "../Pages/TestPage";

const Routers = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/test" component={TestPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routers;
