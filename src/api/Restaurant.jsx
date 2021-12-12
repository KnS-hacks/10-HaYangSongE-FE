/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */
import api from './api';

// 전체 식당 list 조회
export const restaurantList = async param => {
  const res = await api({
    url: '/account/restaurant/',
    type: 'get',
  });
  return res;
};

// 식당 detail 조회
export const restaurantDetail = async param => {
  const res = await api({
    url: `/account/restaurant/${param}/`,
    type: 'get',
  });
  return res;
};

// 식당 waiting 생성
export const waitingCreate = async param => {
  const res = await api({
    url: '/service/waiting/?format=json',
    type: 'post',
    param,
  });
  return res;
};
