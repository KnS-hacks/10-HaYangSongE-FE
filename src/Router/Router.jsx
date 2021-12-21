/* eslint-disable import/no-unresolved */
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// url config
import {
  JoinPage,
  LoginPage,
  SelectPage,
  DetailPage,
  SearchPage,
  MyReservationPage,
  MyPage,
  ModifyPage,
  District1Page,
  District2Page,
} from '@pages';

const Routers = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route path="/district1" component={District1Page} />
        <Route path="/district2" component={District2Page} />
        <Route path="/join" component={JoinPage} />
        <Route path="/select" component={SelectPage} />
        <Route path="/detail/:resId" component={DetailPage} />
        <Route path="/search" component={SearchPage} />
        <Route path="/reservation" component={MyReservationPage} />
        <Route path="/mypage" component={MyPage} />
        <Route path="/modifypage" component={ModifyPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routers;
