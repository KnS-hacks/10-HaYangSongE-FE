/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { restaurantList } from '../../api/Restaurant';
import Content1 from '../../Components/Main/Content1';

const District1 = () => {
  const [Dis1List, setDis1List] = useState([]);
  const fetch = async () => {
    try {
      const list = await restaurantList();
      const filteredList = list.data.filter(item => item.district === 'WN');
      setDis1List(filteredList);
    } catch (error) {
      return error;
    }
    return Dis1List;
  };
  useEffect(() => {
    fetch();
  }, []);
  return <Content1 listData={Dis1List} />;
};

export default District1;
