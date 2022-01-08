/* eslint-disable no-alert */
/* eslint-disable consistent-return */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { userEdit } from '../../api/User';
import Contents from '../../Components/MyPage/PageContent';
import { UserData, UserInfo } from '../../Recoil/User';

const MyPage = () => {
  const navigate = useNavigate();
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

  const fetchMyProfile = async () => {
    const values = {
      username: inputs.username,
      full_name: inputs.full_name,
      vaccine_step: Number(inputs.vaccine_step),
      vaccine_date: inputs.vaccine_date,
      phone_number: inputs.phone_number,
      password: inputs.password,
    };
    try {
      const result = await userEdit(profile.id, values);
      alert('내 정보 수정 후에는 재로그인 해야합니다.');
    } catch (error) {
      return error;
    }
    navigate('/');
  };

  // input 핸들링
  const handleInputs = e => {
    setinputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
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
      editFinishFunc={fetchMyProfile}
      editState={IsEdit}
      inputFunc={handleInputs}
      inputValue={inputs}
    />
  );
};

export default MyPage;
