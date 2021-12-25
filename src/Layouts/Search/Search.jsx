/* eslint-disable consistent-return */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { restaurantList } from '../../api/Restaurant';
import SearchContent from '../../Components/Search/SearchContent';

const Search = () => {
  const [ResList, setResList] = useState([]);
  const fetch = async () => {
    try {
      const list = await restaurantList();
      setResList(list.data);
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <>
      <SearchContent listData={ResList} />
    </>
  );
};

export default Search;
