/* eslint-disable import/prefer-default-export */
import { atom } from 'recoil';
// 태그된 친구 목록
export const friendsState = atom({
  key: 'friendsState',
  default: [],
});
