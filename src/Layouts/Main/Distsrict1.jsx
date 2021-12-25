/* eslint-disable react-hooks/exhaustive-deps */
import BarLoader from 'react-spinners/BarLoader';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { restaurantList } from '../../api/Restaurant';
import Content from '../../Components/Main/Content';

const ContentDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
`;

const District1 = () => {
  const [isLoading, setisLoading] = useState(true);
  const [Dis1List, setDis1List] = useState([]);

  const fetch = async () => {
    try {
      const list = await restaurantList();
      const filteredList = list.data.filter(item => item.district === 'WN');
      setTimeout(() => {
        setDis1List(filteredList);
        setisLoading(false);
      }, 500);
    } catch (error) {
      return error;
    }
    return Dis1List;
  };

  useEffect(() => {
    fetch();
  }, []);

  if (isLoading)
    return (
      <ContentDiv>
        <BarLoader height="10px" width="200px" color="#256AF0" />
      </ContentDiv>
    );

  return <Content listData={Dis1List} />;
};

export default District1;
