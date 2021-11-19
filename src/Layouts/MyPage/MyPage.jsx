import React from 'react';
import { useRecoilValue } from 'recoil';
import Contents from '../../Components/MyPage/PageContent';
import { UserData } from '../../Recoil/User';

const MyPage = () => {
  const user = useRecoilValue(UserData);
  console.log(user);
  return (
    <Contents
      userName="하양송이"
      userID="qlqlql"
      userNumber="010-1234-5678"
      userStep="1"
      userDate="2021.11.29"
    />
  );
};

export default MyPage;
