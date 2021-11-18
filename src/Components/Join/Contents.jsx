/* eslint-disable no-undef */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { userJoin } from '../../api/User';
import Button from '../Common/Button';
import Inputs, { InputNum } from '../Common/Inputs';

const Container = styled.div`
  width: 50vw;
  height: 100vh;
  margin: 0 auto;

  &:nth-child(1) > div {
    height: 65%;
    padding: 50px;
  }

  // 접종 여부, 접종일 묶기
  &:nth-child(1) > div > div {
    display: flex;
  }

  button {
    margin-top: 20px;
  }
`;

const Title = styled.p`
  text-align: center;
  font-weight: 700;
  font-size: 2rem;
  padding: 50px 30px 40px 30px;
`;

const Contents = () => {
  // useHistory 사용
  const history = useHistory();
  // input 관련 로직
  const [inputs, setinputs] = useState({});

  const handleInputs = e => {
    // const { name, value } = e.target;
    setinputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const fetch = async () => {
    try {
      const response = await userJoin(inputs);
      console.log(response);
    } catch (error) {
      return error;
    }
    return response;
  };

  // join 로직 후 login으로 이동
  const join = () => {
    fetch();
    history.push('/join');
  };
  return (
    <Container>
      <Title>회원가입</Title>
      <div>
        <Inputs
          inputName="full_name"
          inputChange={handleInputs}
          inputPlaceholder="이름을 입력해주세요."
          inputContent="이름"
          inputValue={inputs.full_name}
        />
        <Inputs
          inputName="username"
          inputChange={handleInputs}
          inputPlaceholder="아이디를 입력해주세요."
          inputContent="아이디"
          inputValue={inputs.username}
        />
        <Inputs
          inputName="password"
          inputChange={handleInputs}
          inputType="password"
          inputPlaceholder="비밀번호를 입력해주세요."
          inputContent="비밀번호"
          inputValue={inputs.password}
        />
        <Inputs
          inputName="password2"
          inputChange={handleInputs}
          inputType="password"
          inputPlaceholder="비밀번호를 다시 한 번 입력해주세요."
          inputContent="비밀번호 확인"
          inputValue={inputs.password2}
        />
        <Inputs
          inputName="phone_number"
          inputChange={handleInputs}
          inputPlaceholder="휴대폰 번호를 입력해주세요."
          inputContent="휴대폰 번호"
          inputValue={inputs.phone_number}
        />
        <div>
          <InputNum
            inputName="vaccine_step"
            inputChange={handleInputs}
            inputContent="백신 접종 여부"
            inputValue={inputs.vaccine_step}
          />
          <Inputs
            inputName="vaccine_date"
            inputChange={handleInputs}
            inputWidth="200px"
            inputContent="마지막 접종일"
            inputType="date"
            inputValue={inputs.vaccine_date}
          />
        </div>
        <Button
          Width="590px"
          Height="70px"
          Content="회원가입"
          ClickFunc={join}
        />
      </div>
    </Container>
  );
};

export default Contents;
