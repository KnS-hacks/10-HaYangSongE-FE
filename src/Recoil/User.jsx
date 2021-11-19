/* eslint-disable import/prefer-default-export */
import { atom } from 'recoil';

// 로그인 결과
export const UserData = atom({
  key: 'UserData',
  default: {},
});

// 유저 정보
export const UserInfo = atom({
  key: 'UserInfo',
  default: [],
});
