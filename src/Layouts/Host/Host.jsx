/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import HostContents from '../../Components/Host/HostContents';
import { UserInfo } from '../../Recoil/User';

const Host = () => {
  const profile = useRecoilValue(UserInfo);
  // 현재 시각 표기
  const [Today, setToday] = useState('');
  const createDate = () => {
    const today = new Date();
    const nowYear = today.getFullYear();
    const nowMonth = today.getMonth() + 1;
    const nowDate = today.getDate();
    const nowHour = today.getHours();
    const nowMinutes = today.getMinutes();
    const nowSec = today.getSeconds();
    setToday(
      `${nowYear}년 ${nowMonth}월 ${nowDate}일 ${nowHour}시 ${nowMinutes}분 ${nowSec}초`,
    );
  };

  useEffect(() => {
    const timeFunc = setInterval(() => {
      createDate();
    }, 1000);
    return () => {
      clearInterval(timeFunc);
    };
  }, []);

  return (
    <>
      <HostContents userName={profile.username} nowTime={Today} />
    </>
  );
};

export default Host;
