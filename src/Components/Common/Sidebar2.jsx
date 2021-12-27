import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Search } from '../../Assets/Icons/Search.svg';
import { ReactComponent as MyReservation } from '../../Assets/Icons/MyReservation.svg';
import { ReactComponent as Logo } from '../../Assets/Icons/Logo.svg';
import { ReactComponent as Profile } from '../../Assets/Icons/Profile.svg';
import Colors from '../../Assets/Colors/Colors';

const Container = styled.div`
  float: left;
  text-align: center;
  box-sizing: border-box;
  width: 110px;
  height: 100vh;
  padding: 10px 0;
  margin-right: 30px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  // logo
  & > svg {
    padding: 15px 10px;
  }
  // 위에 세 개 box
  & > div {
    height: 70%;
    .selected svg {
      stroke: ${Colors.main};
    }
  }
  // 세 개 padding
  div svg {
    padding: 20px;
  }
  .active svg {
    stroke: ${Colors.main};
  }
  // 전체 svg
  svg {
    :hover {
      cursor: pointer;
    }
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
`;

const Sidebar2 = () => {
  return (
    <Container>
      <Logo width="75" height="60" />
      <div>
        <StyledNavLink to="/search">
          <Search stroke="black" width="45" height="45" />
        </StyledNavLink>
        <StyledNavLink to="/reservation">
          <MyReservation stroke="black" />
        </StyledNavLink>
      </div>
      <StyledNavLink to="/mypage">
        <Profile stroke="black" />
      </StyledNavLink>
    </Container>
  );
};

export default Sidebar2;
