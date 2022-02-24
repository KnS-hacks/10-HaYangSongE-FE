// 액션 정의
const CLEAR_LIST = 'reservation/CLEAR_LIST';
const ADD_LIST = 'reservation/ADD_LIST';
const DEL_LIST = 'reservation/DEL_LIST';

// 액션 생성
export const clearList = () => ({ type: CLEAR_LIST });
export const addList = data => ({ type: ADD_LIST, payload: data });
export const delList = data => ({ type: DEL_LIST, payload: data });

// 초기 state
const initialState = '';
let friends = [];

const reservation = (state = initialState, action) => {
  switch (action.type) {
    case ADD_LIST:
      friends.push({ username: action.payload });
      return friends;
    case DEL_LIST:
      friends = friends.filter(friend => friend.username !== action.payload);
      return friends;
    case CLEAR_LIST:
      friends = [];
      return friends;
    default:
      return state;
  }
};

export default reservation;
