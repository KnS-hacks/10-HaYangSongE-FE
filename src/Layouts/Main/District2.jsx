/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { restaurantList } from '../../api/Restaurant';
import Content2 from '../../Components/Main/Content2';

const District2 = () => {
  const [Dis2List, setDis2List] = useState([]);
  const fetch = async () => {
    try {
      const list = await restaurantList();
      const filteredList = list.data.filter(item => item.district === 'DO');
      setDis2List(filteredList);
    } catch (error) {
      return error;
    }
    return Dis2List;
  };
  useEffect(() => {
    fetch();
  }, []);
  return <Content2 listData={Dis2List} />;
};

export default District2;
