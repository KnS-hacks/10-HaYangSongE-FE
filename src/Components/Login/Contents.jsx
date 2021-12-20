/* eslint-disable no-alert */
/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { ReactComponent as Logo } from '../../Assets/Icons/Logo.svg';
import { ReactComponent as Key } from '../../Assets/Icons/Key.svg';
import { ReactComponent as Id } from '../../Assets/Icons/Id.svg';
import Colors from '../../Assets/Colors/Colors';
import { LoginInput } from '../Common/Inputs';
import Button from '../Common/Button';
import StyledLink from '../Common/StyledLink';
import { userInfoAPI, userLogin } from '../../api/User';
import { UserData, UserInfo } from '../../Recoil/User';

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

const Contents = () => {
  const history = useHistory();
  // 로그인 정보 저장
  const [User, setUser] = useRecoilState(UserData);
  // 유저 정보 저장
  const [UserProfile, setUserProfile] = useRecoilState(UserInfo);
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
      // success 가 true 일 경우에만 페이지 이동
      if (userData.data.success) {
        setUser(userData.data);
        const info = await userInfoAPI(User.username);
        setUserProfile(info.data);
        console.log(UserProfile);
        history.push('/select');
        // false 인 경우 로그인 실패하고 알림 출력
      } else {
        alert('로그인에 실패했습니다. 다시 로그인해주세요.');
      }
    } catch (error) {
      return error;
    }
  };

  const login = () => {
    fetch();
  };
  return (
    <Container>
      <Content>
        <Logo width="180" height="150" />
        <InputContainer>
          <InputDiv>
            <Id width="30" height="30" />
            <LoginInput
              inputChange={handleInputs}
              inputName="username"
              inputPlaceholder="아이디를 입력해주세요."
              inputValue={inputs.username}
            />
          </InputDiv>
          <InputDiv>
            <Key width="30" height="30" />
            <LoginInput
              inputChange={handleInputs}
              inputName="password"
              inputType="password"
              inputValue={inputs.password}
              inputPlaceholder="비밀번호를 입력해주세요."
            />
          </InputDiv>
        </InputContainer>
        <Button Content="로그인" Width="100%" Height="60px" ClickFunc={login} />
        <StyledLink Url="/join" Color={Colors.main}>
          <JoinInfo>아직 계정이 없으신가요?</JoinInfo>
        </StyledLink>
      </Content>
    </Container>
  );
};

export default Contents;
