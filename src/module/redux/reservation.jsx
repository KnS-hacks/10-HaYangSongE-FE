// 액션 정의
const ADDLIST = 'reservation/ADDLIST';
const DELLIST = 'reservation/DELLIST';

// 액션 생성
export const addList = data => ({ type: ADDLIST, payload: data });
export const delList = data => ({ type: DELLIST, payload: data });

// 초기 state
const initialState = [];

const reservation = (state = initialState, action) => {
  switch (action.type) {
    case ADDLIST:
      console.log(action.data);
      return action.data;
    case DELLIST:
      return action.data;
    default:
      return state;
  }
};

export default reservation;
