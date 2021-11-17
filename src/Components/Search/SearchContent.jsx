/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/forbid-prop-types */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { ReactComponent as Search } from '../../Assets/Icons/Search.svg';
import Colors from '../../Assets/Colors/Colors';

const InputBox = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 2px solid black;
  width: 80%;
  input {
    font-family: inherit;
    font-size: 1.2rem;
    border: none;
    width: 100%;
    box-sizing: border-box;
    padding: 6px;
  }
  input:focus {
    outline: none;
  }
`;

const ResultNum = styled.p`
  line-height: 40px;
  span {
    font-weight: 400;
    color: ${Colors.main};
  }
`;

const ResultBox = styled.div`
  width: 80%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SearchContent = ({ listData }) => {
  const [searchText, setsearchText] = useState('');
  const [resultList, setresultList] = useState([]);
  // 서치 input handle
  const handleSearch = e => {
    setsearchText(e.target.value);
  };

  const searchOutput = () => {
    const filteredList = listData.filter(
      item => item.branch_name.indexOf(searchText) > -1,
    );
    setresultList(filteredList);
  };

  // 입력값이 바뀔 때마다 필터링
  useEffect(() => {
    searchOutput();
  }, [searchText]);

  return (
    <>
      <InputBox>
        <input
          onChange={handleSearch}
          placeholder="식당 이름을 검색해보세요."
        />
        <Search width="30" height="30" />
      </InputBox>
      <div>
        <ResultNum>
          검색결과 <span>{resultList.length}</span>건
        </ResultNum>
        <ResultBox>
          {resultList.length === 0 ? (
            <p>일치하는 검색 결과가 없습니다.</p>
          ) : (
            resultList.map(item => <p>{item.branch_name}</p>)
            // {resultList.map(item => (
            //   <p>{item.branch_name}</p>
            // ))}
          )}
        </ResultBox>
      </div>
    </>
  );
};

SearchContent.propTypes = {
  listData: PropTypes.array.isRequired,
};

export default SearchContent;
