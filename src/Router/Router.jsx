import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import JoinPage from "../Pages/JoinPage";
import MainPage from "../Pages/MainPage";
import TestPage from "../Pages/TestPage";

const Routers = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/test" component={TestPage} />
        <Route path="/join" component={JoinPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routers;
