/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */
import api from './api';

export const join = async param => {
  await api({
    url: '/account/restaurant',
    type: 'get',
  });
};
