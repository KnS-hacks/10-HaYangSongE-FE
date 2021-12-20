/* eslint-disable no-unused-vars */
import React from 'react';
import { useRecoilValue } from 'recoil';
import Contents from '../../Components/MyPage/PageContent';
import { UserData, UserInfo } from '../../Recoil/User';

const MyPage = () => {
  const user = useRecoilValue(UserData);
  const profile = useRecoilValue(UserInfo);
  return (
    <Contents
      userName={profile.full_name}
      userID={profile.username}
      userNumber={profile.phone_number}
      userStep={profile.vaccine_step}
      userDate={profile.vaccine_date}
    />
  );
};

export default MyPage;
