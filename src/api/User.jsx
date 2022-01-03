/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */
import axios from 'axios';
import api from './api';
// 로그인
export const userLogin = async param => {
  const res = await api({
    url: '/login',
    type: 'post',
    param,
  });
  return res;
};

// 회원가입
export const userJoin = async param => {
  const res = await api({
    url: '/guest',
    type: 'post',
    param,
  });
  return res;
};

// user 정보
export const userInfoAPI = async param => {
  const res = await api({
    url: `/guest/${param}`,
    type: 'get',
    param,
  });
  return res;
};

// 수정
export const userModify = async param => {
  const res = await api({
    url: '/modify', // 수정 url 필요
    type: 'patch',
    param,
  });
  return res;
};

// waiting
export const userWaiting = async param => {
  const res = await api({
    url: `/guest/waiting/${param}`,
    type: 'get',
    param,
  });
  return res;
};
