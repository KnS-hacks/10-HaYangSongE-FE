import React from 'react';
import SearchContent from '../../Components/Search/SearchContent';

const TESTDATA = [
  {
    host: '점주',
    branch_name: '맥도날드',
  },
  {
    host: '점주',
    branch_name: '봉구스 밥버거',
  },
  {
    host: '점주',
    branch_name: '버거킹',
  },
  {
    host: '점주',
    branch_name: '롯데리아',
  },
];

const Search = () => {
  return (
    <>
      <SearchContent listData={TESTDATA} />
    </>
  );
};

export default Search;
