/* eslint-disable import/prefer-default-export */
import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist({
  key: 'user',
  storage: sessionStorage,
});

// 로그인 결과
export const UserData = atom({
  key: 'UserData',
  default: {},
  effects_UNSTABLE: [persistAtom],
});

// 유저 정보
export const UserInfo = atom({
  key: 'UserInfo',
  default: {},
  effects_UNSTABLE: [persistAtom],
});
