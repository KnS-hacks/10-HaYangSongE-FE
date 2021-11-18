/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */
import axios from 'axios';
import api from './api';
// 로그인
export const userLogin = async param => {
  const res = await api({
    url: '/account/login/?format=json',
    type: 'post',
    param,
  });
  return res;
};

// 회원가입
export const userJoin = async param => {
  const res = await api({
    url: '/account/guest/?format=json',
    type: 'post',
    param,
  });
  return res;
};
