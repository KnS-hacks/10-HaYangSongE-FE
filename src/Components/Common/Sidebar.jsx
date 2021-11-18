import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Logo } from '../../Assets/Icons/Logo.svg';
import { ReactComponent as Home } from '../../Assets/Icons/Home.svg';
import { ReactComponent as Search } from '../../Assets/Icons/Search.svg';
import { ReactComponent as MyReservation } from '../../Assets/Icons/MyReservation.svg';
import { ReactComponent as Profile } from '../../Assets/Icons/Profile.svg';
// import Colors from "../../Assets/Colors/Colors";

const Bar = styled.div`
  position: fixed;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100px;
  height: 100vh;
  padding: 20px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

const LogoDiv = styled.div`
  height: 12%;
  &:hover {
    cursor: pointer;
    transition: 0.3s;
  }
`;

const TopIcon = styled.div`
  height: 75%;
`;

const IconWrapper = styled.div`
  padding: 20px;
  &:hover {
    cursor: pointer;
    transition: 0.3s;
  }
`;
const BottomIcon = styled.div`
  &:hover {
    cursor: pointer;
    transition: 0.3s;
  }
`;

function Sidebar() {
  return (
    <Bar>
      <LogoDiv>
        <Logo />
      </LogoDiv>
      <TopIcon>
        <IconWrapper>
          <Home />
        </IconWrapper>
        <IconWrapper>
          <Search width="50" height="50" />
        </IconWrapper>
        <IconWrapper>
          <MyReservation />
        </IconWrapper>
      </TopIcon>
      <BottomIcon>
        <Profile />
      </BottomIcon>
    </Bar>
  );
}

export default Sidebar;
