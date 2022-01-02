/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable consistent-return */
import React from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { NavLink, Navigate, useNavigate } from 'react-router-dom';
import Button from './Button';
import Colors from '../../Assets/Colors/Colors';
import { UserData, UserInfo } from '../../Recoil/User';

const Container = styled.div`
  box-sizing: border-box;
  height: 100px;

  .active span {
    font-weight: 700;
  }
`;

const Place = styled.span`
  display: inline-block;
  margin: 40px 40px 0 0;
  font-size: 1.5rem;
  font-weight: 400;
  :hover {
    cursor: pointer;
  }
`;

const StyledNavLink = styled(NavLink)`
  &:visited {
    color: black;
    text-decoration: none;
  }
  &:link {
    color: black;
    text-decoration: none;
  }

  &.active {
    display: inline-block;
    box-sizing: border-box;
    font-weight: 700;
  }
`;

const ButtonBox = styled.div`
  position: absolute;
  right: 30px;
  top: 30px;
`;

const Header2 = () => {
  const [User, setUser] = useRecoilState(UserData);
  const [UserProfile, setUserProfile] = useRecoilState(UserInfo);
  const navigate = useNavigate();
  const logout = () => {
    console.log('로그아웃');
    alert('정말 로그아웃 하시겠어요?');
    // 모든 유저 정보 삭제
    setUser();
    setUserProfile();
    sessionStorage.removeItem('user');
    window.sessionStorage.clear();
    const a = sessionStorage.getItem('user');
    console.log(a);
    navigate('/');
  };
  return (
    <Container>
      <StyledNavLink to="/district1">
        <Place>서북구</Place>
      </StyledNavLink>
      <StyledNavLink to="/district2">
        <Place>동남구</Place>
      </StyledNavLink>
      <ButtonBox>
        <Button
          Width="110px"
          Height="50px"
          backgroundColor={Colors.main}
          Color="#ffffff"
          Content="로그아웃"
          ClickFunc={logout}
        />
      </ButtonBox>
    </Container>
  );
};

export default Header2;
