/* eslint-disable react/forbid-prop-types */
/* eslint-disable import/named */
/* eslint-disable no-alert */
/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
import React, { useState } from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import { ReactComponent as Logo } from '../../Assets/Icons/Logo.svg';
import { ReactComponent as Key } from '../../Assets/Icons/Key.svg';
import { ReactComponent as Id } from '../../Assets/Icons/Id.svg';
import Colors from '../../Assets/Colors/Colors';
import { LoginInput } from '../Common/Inputs';
import Button from '../Common/Button';
import StyledLink from '../Common/StyledLink';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 35vw;
  height: 80vh;
`;

const InputContainer = styled.div`
  width: 100%;
`;

const InputDiv = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  height: 50px;
  border: 1.5px solid ${Colors.black};
  padding: 10px;
  margin: 25px 0;
`;

const JoinInfo = styled.p`
  color: ${Colors.main};
  font-size: 1.1rem;
  :hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

const Contents = ({ inputFunc, loginFunc, inputValue, inputEnter }) => {
  return (
    <Container>
      <Content>
        <Logo width="180" height="150" />
        <InputContainer>
          <InputDiv>
            <Id width="30" height="30" />
            <LoginInput
              inputChange={inputFunc}
              inputName="username"
              inputPlaceholder="아이디를 입력해주세요."
              inputValue={inputValue.username}
            />
          </InputDiv>
          <InputDiv>
            <Key width="30" height="30" />
            <LoginInput
              inputChange={inputFunc}
              inputName="password"
              inputType="password"
              inputValue={inputValue.password}
              inputEnter={inputEnter}
              inputPlaceholder="비밀번호를 입력해주세요."
            />
          </InputDiv>
        </InputContainer>
        <Button
          Content="로그인"
          Width="100%"
          Height="60px"
          ClickFunc={loginFunc}
        />
        <StyledLink Url="/join" Color={Colors.main}>
          <JoinInfo>아직 계정이 없으신가요?</JoinInfo>
        </StyledLink>
      </Content>
    </Container>
  );
};

Contents.propTypes = {
  inputFunc: propTypes.func.isRequired,
  loginFunc: propTypes.func.isRequired,
  inputValue: propTypes.object,
  inputEnter: propTypes.func.isRequired,
};

Contents.defaultProps = {
  inputValue: {},
};

export default Contents;
