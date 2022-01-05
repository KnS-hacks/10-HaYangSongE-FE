/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import Contents from '../../Components/MyPage/PageContent';
import { UserData, UserInfo } from '../../Recoil/User';

const MyPage = () => {
  const user = useRecoilValue(UserData);
  const profile = useRecoilValue(UserInfo);

  // input 관련 로직
  const [inputs, setinputs] = useState({});

  // edit on/off
  const [IsEdit, setIsEdit] = useState(false);
  // edit button toggle event
  const toggleEdit = () => {
    setIsEdit(true);
    console.log(IsEdit);
  };

  const handleInputs = e => {
    setinputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Contents
      userName={profile.full_name}
      userID={profile.username}
      userNumber={profile.phone_number}
      userStep={profile.vaccine_step}
      userDate={profile.vaccine_date}
      editFunc={toggleEdit}
      editState={IsEdit}
      inputFunc={handleInputs}
    />
  );
};

export default MyPage;
