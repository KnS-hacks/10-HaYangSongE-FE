/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */
import api from './api';

export const restaurantList = async param => {
  const res = await api({
    url: '/account/restaurant',
    type: 'get',
  });
  return res;
};

export const restaurantDetail = async param => {
  console.log(param);
  const res = await api({
    url: `/account/restaurant/${param}`,
    type: 'get',
  });
  console.log(res);
  return res;
};
