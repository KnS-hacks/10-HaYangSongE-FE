import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Logo } from '../../Assets/Icons/Logo.svg';
import { ReactComponent as Home } from '../../Assets/Icons/Home.svg';
import { ReactComponent as Search } from '../../Assets/Icons/Search.svg';
import { ReactComponent as MyReservation } from '../../Assets/Icons/MyReservation.svg';
import { ReactComponent as Profile } from '../../Assets/Icons/Profile.svg';
// import Colors from "../../Assets/Colors/Colors";

const Bar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 5%;
  height: 100vh;
  padding: 50px;
  box-shadow: rgba(2, 2, 2, 0.15) 2.4px 2.4px 3.2px;
`;

const LogoDiv = styled.div`
  height: 10%;
`;

const TopIcon = styled.div`
  height: 70%;
`;

const IconWrapper = styled.div`
  box-sizing: border-box;
  padding: 20px;
`;
const BottomIcon = styled.div``;

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
          <Search />
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
