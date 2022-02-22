// 액션 정의
const USERPROFILE = 'profile/USERPROFILE';
const USERLOGOUT = 'profile/USERLOGOUT';

// 액션 생성
// 유저 정보
export const userProfile = payload => ({ type: USERPROFILE, data: payload });
// 로그아웃
export const userLogout = () => ({ type: USERLOGOUT, payload: {} });

// 초기 state
const initialState = {};

// 유저 정보
const profile = (state = initialState, action) => {
  switch (action.type) {
    case USERPROFILE:
      return action.data;
    case USERLOGOUT:
      return console.log('로그아웃');
    default:
      return state;
  }
};

export default profile;
