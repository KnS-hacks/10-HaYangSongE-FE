/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */
import axios from 'axios';
import api from './api';
// 로그인
export const userLogin = async param => {
  const res = await api({
    url: '/login',
    type: 'POST',
    param,
  });
  return res;
};

// 회원가입
export const userJoin = async param => {
  const res = await api({
    url: '/guest',
    type: 'POST',
    param,
  });
  return res;
};

// user 정보
export const userInfoAPI = async param => {
  const res = await api({
    url: `/guest/${param}`,
    type: 'GET',
    param,
  });
  return res;
};

// 수정
export const userEdit = async (id, param) => {
  const res = await api({
    url: `/guest/${id}`, // 수정 url 필요
    type: 'PATCH',
    param,
  });
  return res;
};

// waiting
export const userWaiting = async param => {
  const res = await api({
    url: `/guest/waiting/${param}`,
    type: 'GET',
    param,
  });
  return res;
};
