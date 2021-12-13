import React from 'react';
import { useRecoilValue } from 'recoil';
import Contents from '../../Components/MyReservation/Contents';
import {
  friendsState,
  myRestaurantName,
  orderState,
  waitingState,
} from '../../Recoil/Reservation';

// Would Fix :: Recoil (x) api애서 통신해서 가져오기
const MyReservation = () => {
  const myTime = useRecoilValue(waitingState);
  const myOrder = useRecoilValue(orderState);
  const myResName = useRecoilValue(myRestaurantName);
  const myPeople = useRecoilValue(friendsState).length + 1;
  return (
    <>
      <Contents
        remainTime={myTime}
        order={myOrder}
        resName={myResName}
        peopleNum={myPeople}
      />
    </>
  );
};

export default MyReservation;
