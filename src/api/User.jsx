/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */
import api from './api';

// 로그인
export const userLogin = async param => {
  const res = await api({
    url: '/account/login',
    type: 'post',
  });
  return res;
};

// 회원가입
export const userJoin = async param => {
  console.log(param);
  const res = await api({
    url: '/account/guest',
    type: 'post',
    param,
  });
  console.log(res);
  return res;
};
