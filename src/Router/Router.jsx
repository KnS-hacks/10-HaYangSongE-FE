import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import JoinPage from '../Pages/JoinPage';
import MainPage from '../Pages/MainPage';
import TestPage from '../Pages/TestPage';
import LoginPage from '../Pages/LoginPage';
import SelectPage from '../Pages/SelectPage';
import DetailPage from '../Pages/DetailPage';
import SearchPage from '../Pages/SearchPage';
import MyReservationPage from '../Pages/MyReservationPage';

const Routers = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/test" component={TestPage} />
        <Route path="/join" component={JoinPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/select" component={SelectPage} />
        <Route path="/detail" component={DetailPage} />
        <Route path="/search" component={SearchPage} />
        <Route path="/reservation" component={MyReservationPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routers;
