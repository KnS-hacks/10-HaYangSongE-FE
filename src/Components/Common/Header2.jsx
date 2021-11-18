import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Colors from '../../Assets/Colors/Colors';

const Container = styled.div`
  box-sizing: border-box;
  height: 100px;
  /* margin-bottom: 30px; */
  .selected span {
    display: inline-block;
    box-sizing: border-box;
    border-bottom: 8px solid ${Colors.main};
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
`;

const Header2 = () => {
  return (
    <Container>
      <StyledNavLink to="/district1" activeClassName="selected">
        <Place>서북구</Place>
      </StyledNavLink>
      <StyledNavLink exact to="/district2" activeClassName="selected">
        <Place>동남구</Place>
      </StyledNavLink>
    </Container>
  );
};

export default Header2;
