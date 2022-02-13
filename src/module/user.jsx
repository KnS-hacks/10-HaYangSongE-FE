// 액션 정의
const LOGIN = 'user/LOGIN';
const LOGOUT = 'user/LOGOUT';

// 액션 생성 함수
// 로그인
export const login = payload => ({ type: LOGIN, data: payload });
// 로그아웃
export const logout = () => ({ type: LOGOUT, payload: {} });

// 초기 state 정의
const initialState = {};

// action(함수) => reducer(초기값, 액션을 기반으로 새로운 상태를 반환하는) => store
// 리듀서

// 로그인 정보
const user = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return action.data;
    case LOGOUT:
      return console.log('로그아웃');
    default:
      return state;
  }
};

export default user;
