/* eslint-disable no-alert */
/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import Contents from '../../Components/Login/Contents';
import { UserData, UserInfo } from '../../Recoil/User';
import { userInfoAPI, userLogin } from '../../api/User';

const Login = () => {
  const navigate = useNavigate();

  // input 관련 로직
  const [inputs, setinputs] = useState({});

  // 로그인 정보 저장
  const [User, setUser] = useRecoilState(UserData);

  // 유저 정보 저장
  const [UserProfile, setUserProfile] = useRecoilState(UserInfo);

  const handleInputs = e => {
    setinputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const fetch = async () => {
    // 파라미터 정의
    const values = {
      username: inputs.username,
      password: inputs.password,
    };
    setUserProfile({});
    try {
      // api 통신
      const userData = await userLogin(values);
      // success 가 true 일 경우에만 페이지 이동
      if (userData.data.success) {
        setUser(userData.data);
        const info = await userInfoAPI(userData.data.username);
        setUserProfile(info.data);
        navigate('/select');
        // false 인 경우 로그인 실패하고 알림 출력
      } else {
        alert('로그인에 실패했습니다. 다시 로그인해주세요.');
      }
    } catch (error) {
      return error;
    }
  };

  return (
    <Contents inputFunc={handleInputs} loginFunc={fetch} inputValue={inputs} />
  );
};

export default Login;
