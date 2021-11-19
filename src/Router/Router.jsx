import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import JoinPage from '../Pages/JoinPage';
import TestPage from '../Pages/TestPage';
import LoginPage from '../Pages/LoginPage';
import SelectPage from '../Pages/SelectPage';
import DetailPage from '../Pages/DetailPage';
import SearchPage from '../Pages/SearchPage';
import MyReservationPage from '../Pages/MyReservationPage';
import MyPage from '../Pages/MyPage';
import ModifyPage from '../Pages/ModifyPage';
import District1Page from '../Pages/District1Page';
import District2Page from '../Pages/District2Page';

const Routers = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route path="/district1" component={District1Page} />
        <Route path="/district2" component={District2Page} />
        <Route path="/test" component={TestPage} />
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
