/* eslint-disable react/forbid-prop-types */
/* eslint-disable consistent-return */
/* eslint-disable no-alert */
import propTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import Button from '../Common/Button';
import Inputs, { InputNum } from '../Common/Inputs';

const Container = styled.div`
  width: 750px;
  height: 100vh;
  margin: 0 auto;

  &:nth-child(1) > div {
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
  padding: 50px 30px 20px 30px;
`;

const Contents = ({ inputFunc, joinFunc, inputValues }) => {
  return (
    <Container>
      <Title>회원가입</Title>
      <div>
        <Inputs
          inputName="full_name"
          inputChange={inputFunc}
          inputPlaceholder="이름을 입력해주세요."
          inputContent="이름"
          inputValue={inputValues.full_name}
        />
        <Inputs
          inputName="username"
          inputChange={inputFunc}
          inputPlaceholder="아이디를 입력해주세요."
          inputContent="아이디"
          inputValue={inputValues.username}
        />
        <Inputs
          inputName="password"
          inputChange={inputFunc}
          inputType="password"
          inputPlaceholder="비밀번호를 입력해주세요."
          inputContent="비밀번호"
          inputValue={inputValues.password}
        />
        <Inputs
          inputName="password2"
          inputChange={inputFunc}
          inputType="password"
          inputPlaceholder="비밀번호를 다시 한 번 입력해주세요."
          inputContent="비밀번호 확인"
          inputValue={inputValues.password2}
        />
        <Inputs
          inputName="phone_number"
          inputChange={inputFunc}
          inputPlaceholder="휴대폰 번호를 입력해주세요."
          inputContent="휴대폰 번호"
          inputValue={inputValues.phone_number}
        />
        <div>
          <InputNum
            inputName="vaccine_step"
            inputChange={inputFunc}
            inputContent="백신 접종 여부"
            inputValue={inputValues.vaccine_step}
          />
          <Inputs
            inputName="vaccine_date"
            inputChange={inputFunc}
            inputWidth="200px"
            inputContent="마지막 접종일"
            inputType="date"
            inputValue={inputValues.vaccine_date}
          />
        </div>
        <Button
          Width="590px"
          Height="70px"
          Content="회원가입"
          ClickFunc={joinFunc}
        />
      </div>
    </Container>
  );
};

Contents.propTypes = {
  inputFunc: propTypes.func.isRequired,
  joinFunc: propTypes.func.isRequired,
  inputValues: propTypes.object,
};

Contents.defaultProps = {
  inputValues: {},
};

export default Contents;
