/* eslint-disable import/prefer-default-export */
import { atom } from 'recoil';
// 태그된 친구 목록
export const friendsState = atom({
  key: 'friendsState',
  default: [],
});

// 예약하기 위해 해당 restaurnat 고유 키 저장
export const restaurantState = atom({
  key: 'restaurantState',
  default: '',
});

export const orderState = atom({
  key: 'orderState',
  default: 0,
});

export const waitingState = atom({
  key: 'waitingState',
  default: 0,
});
