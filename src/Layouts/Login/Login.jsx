/* eslint-disable no-alert */
/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Contents from '../../Components/Login/LoginContents';
import { userInfoAPI, userLogin } from '../../api/User';
import { login } from '../../module/user';
import { userProfile } from '../../module/profile';

const Login = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const profile = useSelector(state => state.profile);
  const navigate = useNavigate();

  // input 관련 로직
  const [inputs, setinputs] = useState({});

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
    try {
      // api 통신
      const userData = await userLogin(values);
      console.log(userData);
      // user token - dispatch 실행
      dispatch(login(userData.data));

      // success 가 true 일 경우에만 페이지 이동
      if (userData.status === 200) {
        const info = await userInfoAPI();
        // user 정보 - dispatch 실행
        dispatch(userProfile(info.data.data));
        // 일반 회원인 경우
        if (userData.data.authorities[0].authority === 'USER') {
          navigate('/select');
          // 일반 회원일 경우
        } else {
          navigate('/host');
        }
        // false 인 경우 로그인 실패하고 알림 출력
      } else {
        alert('로그인에 실패했습니다. 다시 로그인해주세요.');
      }
    } catch (error) {
      return error;
    }
  };

  // enter 누를 시에도 login
  const enterKey = () => {
    if (window.event.keyCode === 13) {
      fetch();
    }
  };

  return (
    <Contents
      inputFunc={handleInputs}
      loginFunc={fetch}
      inputValue={inputs}
      inputEnter={enterKey}
    />
  );
};

export default Login;
