/* eslint-disable no-alert */
/* eslint-disable import/order */
/* eslint-disable consistent-return */
import React, { useState } from 'react';
import Contents from '../../Components/Join/Contents';
import { userJoin } from '../../api/User';
// import { useNavigate } from 'react-router-dom';

const Join = () => {
  // navigate 정의
  // const navigate = useNavigate();
  // input 관련 로직
  const [inputs, setinputs] = useState({});

  // onChange 함수
  const handleInputs = e => {
    // const { name, value } = e.target;
    setinputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const fetch = async () => {
    // 파라미터 정의
    const values = {
      username: inputs.username,
      full_name: inputs.full_name,
      vaccine_step: Number(inputs.vaccine_step),
      vaccine_date: inputs.vaccine_date,
      phone_number: inputs.phone_number,
      password: inputs.password,
    };
    try {
      // api 통신
      await userJoin(values);
    } catch (error) {
      alert('입력 사항을 확인하고 다시 회원가입을 해주세요.');
    }
  };

  return (
    <div>
      <Contents
        inputFunc={handleInputs}
        joinFunc={fetch}
        inputValues={inputs}
      />
    </div>
  );
};

export default Join;
