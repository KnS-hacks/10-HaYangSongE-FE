/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable consistent-return */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import District from '../../Components/Select/District';
import { ReactComponent as Map } from '../../Assets/Icons/Map.svg';
import { restaurantList } from '../../api/Restaurant';

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
  const [Percent1, setPercent1] = useState();
  const [Percent2, setPercent2] = useState();
  const [List, setList] = useState([]);
  const fetch = async () => {
    try {
      const list = await restaurantList();
      setList(list);
      setPercent1(List.data[0].WN);
      setPercent2(List.data[0].SE);
    } catch (error) {
      return error;
    }
  };
  useEffect(() => {
    fetch();
  });
  return (
    <Container>
      <Title>지역을 선택해주세요.</Title>
      <Content>
        <Map width="400" height="400" />
        <div>
          <District districtName="서북구" percent={Percent1} Url="/district1" />
          <District districtName="동남구" percent={Percent2} Url="/district2" />
        </div>
      </Content>
    </Container>
  );
};

export default Select;
