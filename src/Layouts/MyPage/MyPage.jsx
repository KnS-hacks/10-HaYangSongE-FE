/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
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
  };

  // input 핸들링
  const handleInputs = e => {
    setinputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
    console.log(inputs);
  };

  // 렌더링 되면 inputs 에 기존의 userData 넣기
  useEffect(() => {
    setinputs(profile);
  }, [IsEdit]);

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
      inputValue={inputs}
    />
  );
};

export default MyPage;
