/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */
import api from './api';

// 식당 detail 조회
export const restaurantDetail = async param => {
  const res = await api({
    url: `/account/restaurant/${param}`,
    type: 'get',
  });
  return res;
};

// 식당 waiting 생성
export const waitingCreate = async param => {
  const res = await api({
    url: '/service/waiting',
    type: 'post',
    param,
  });
  return res;
};

// 삭당 search
export const restaurantSearch = async param => {
  const res = await api({
    url: `/account/restaurant?key=${param}`,
    type: 'get',
    param,
  });
  return res;
};

// 지역별 식당 List
export const restaurantList = async param => {
  const res = await api({
    url: `/account/restaurant?district=${param}`,
    type: 'get',
    param,
  });
  return res;
};
