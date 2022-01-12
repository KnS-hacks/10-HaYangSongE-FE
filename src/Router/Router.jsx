/* eslint-disable import/no-unresolved */
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// url config
import {
  JoinPage,
  LoginPage,
  SelectPage,
  DetailPage,
  SearchPage,
  MyReservationPage,
  MyPage,
  District1Page,
  District2Page,
  HostPage,
} from '@pages';
import PublicRouter from './PublicRouter';

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* 토큰이 존재할 경우 login, join 빼고 접근 가능  */}
        <Route element={<PublicRouter />}>
          <Route path="/district1/*">
            <Route path="" element={<District1Page />} />
            <Route path="detail/:resId" element={<DetailPage />} />
          </Route>
          <Route path="/district2/*">
            <Route path="" element={<District2Page />} />
            <Route path="detail/:resId" element={<DetailPage />} />
          </Route>
          <Route path="/host" element={<HostPage />} />
          <Route path="/select" element={<SelectPage />} />
          <Route path="/search/*">
            <Route path="" element={<SearchPage />} />
            <Route path="detail/:resId" element={<DetailPage />} />
          </Route>
          <Route path="/reservation" element={<MyReservationPage />} />
          <Route path="/mypage" element={<MyPage />} />
        </Route>
        {/* 토큰이 존재하지 않을 경우 login, join 만 접근 가능  */}
        <Route path="/" element={<LoginPage />} />
        <Route path="/join" element={<JoinPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
