/* eslint-disable consistent-return */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { restaurantSearch } from '../../api/Restaurant';
import SearchContent from '../../Components/Search/SearchContent';

const Search = () => {
  // input handling state
  const [searchText, setsearchText] = useState('');

  // 서치 input handle
  const handleSearch = e => {
    setsearchText(e.target.value);
  };

  // 서치 결과
  const [ResList, setResList] = useState([]);
  const fetch = async () => {
    try {
      const list = await restaurantSearch(searchText);
      setResList(list.data);
    } catch (error) {
      return error;
    }
  };

  // input 값이 달라질 때마다 api 호출
  useEffect(() => {
    fetch();
  }, [searchText]);

  return (
    <>
      <SearchContent listData={ResList} handleInput={handleSearch} />
    </>
  );
};

export default Search;
