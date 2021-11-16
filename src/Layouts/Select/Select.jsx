import React from 'react';
import styled from 'styled-components';
import District from '../../Components/Select/District';
import { ReactComponent as Map } from '../../Assets/Icons/Map.svg';

const Title = styled.p`
  font-weight: 700;
  font-size: 2.3rem;
`;

const Container = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 80vw;
  height: 100vh;
`;

const Content = styled.div`
  display: flex;
  width: inherit;
  height: 70vh;
  justify-content: space-around;
  align-items: center;

  & > div {
    display: flex;
    flex-direction: column;
    height: inherit;
    justify-content: space-around;
  }
`;

const Select = () => {
  return (
    <Container>
      <Title>지역을 선택해주세요. </Title>
      <Content>
        <Map width="400" height="400" />
        <div>
          <District districtName="서북구" percent="58" />
          <District districtName="동남구" percent="35" />
        </div>
      </Content>
    </Container>
  );
};

export default Select;
