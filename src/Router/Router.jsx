import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import JoinPage from '../Pages/JoinPage';
import MainPage from '../Pages/MainPage';
import TestPage from '../Pages/TestPage';
import LoginPage from '../Pages/LoginPage';

const Routers = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/test" component={TestPage} />
        <Route path="/join" component={JoinPage} />
        <Route path="/login" component={LoginPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routers;
