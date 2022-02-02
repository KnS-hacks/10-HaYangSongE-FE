// 액션 정의
const LOGIN = 'user/LOGIN';
const LOGOUT = 'user/LOGOUT';

// 액션 생성 함수
export const login = userData => ({ type: LOGIN, payload: userData });
export const logout = () => ({ type: LOGOUT, payload: {} });

// 초기 state 정의
const initialState = {
  userInfo: {},
};

// action(함수) => reducer(초기값, 액션을 기반으로 새로운 상태를 반환하는) => store
// 리듀서
const user = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, userInfo: action.userData };
    case LOGOUT:
      return '로그아웃';
    default:
      return state;
  }
};
export default user;
