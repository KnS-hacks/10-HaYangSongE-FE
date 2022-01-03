/* eslint-disable consistent-return */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { userWaiting } from '../../api/User';
import Contents from '../../Components/MyReservation/Contents';
import { UserInfo } from '../../Recoil/User';

const MyReservation = () => {
  const user = useRecoilValue(UserInfo);
  const [WaitingInfo, setWaitingInfo] = useState({});
  const [WaitingNum, setWaitingNum] = useState(0);

  const fetch = async () => {
    try {
      // user의 waiting pk 로 waiting 정보 조회 및 저장
      const waitingInfo = (await userWaiting(user.username)).data;
      if (waitingInfo.data.success) {
        setWaitingInfo(waitingInfo);
        setWaitingNum(waitingInfo.members.length);
      } else {
        setWaitingInfo({});
      }
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <Contents
      remainTime={WaitingInfo.left_time}
      order={WaitingInfo.order}
      resName={WaitingInfo.restaurant}
      peopleNum={WaitingNum}
    />
  );
};

export default MyReservation;
