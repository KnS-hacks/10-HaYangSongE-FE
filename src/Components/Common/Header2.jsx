/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable consistent-return */
import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Button from './Button';
import Colors from '../../Assets/Colors/Colors';

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
  // const [District, setDistrict] = useState();
  // const [Percent1, setPercent1] = useState();
  // const [Percent2, setPercent2] = useState();
  // const [List, setList] = useState([]);
  // const fetch = async () => {
  //   try {
  //     const list = await restaurantList();
  //     setList(list);
  //     setPercent1(List.data[0].WN);
  //     setPercent2(List.data[0].SE);
  //     console.log(Percent1);
  //     console.log(Percent2);
  //   } catch (error) {
  //     return error;
  //   }
  // };
  // useEffect(() => {
  //   fetch();
  // }, []);

  // const changePercent = e => {
  //   if (e.target.innerHTML === '서북구') {
  //     setDistrict(Percent1);
  //     console.log(District);
  //   } else {
  //     setDistrict(Percent2);
  //   }
  // };
  const logout = () => {
    console.log('로그아웃했당');
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
          Color="white"
          Content="로그아웃"
          ClickFunc={logout}
        />
      </ButtonBox>
    </Container>
  );
};

export default Header2;
