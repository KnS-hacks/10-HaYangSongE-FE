/* eslint-disable consistent-return */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { restaurantDetail } from '../../api/Restaurant';
import { userWaiting } from '../../api/User';
import Contents from '../../Components/MyReservation/Contents';
import { UserInfo } from '../../Recoil/User';

const MyReservation = () => {
  const user = useRecoilValue(UserInfo);
  const [ResInfo, setResInfo] = useState({});
  const [WaitingInfo, setWaitingInfo] = useState({});
  const [WaitingNum, setWaitingNum] = useState(0);

  const fetch = async () => {
    try {
      // user의 waiting pk 로 waiting 정보 조회 및 저장
      const waitingInfo = (await userWaiting(user.waiting_current)).data;
      setWaitingInfo(waitingInfo);
      setWaitingNum(waitingInfo.member.length);
      // waiting 정보 내의 식당 정보 조회
      const resInfo = (await restaurantDetail(waitingInfo.restaurant)).data;
      setResInfo(resInfo);
    } catch (error) {
      return error;
    }
  };
  useEffect(() => {
    fetch();
  }, []);

  return (
    <>
      <Contents
        // remainTime={myTime}
        order={WaitingInfo.order}
        resName={ResInfo.name}
        peopleNum={WaitingNum}
      />
    </>
  );
};

export default MyReservation;
