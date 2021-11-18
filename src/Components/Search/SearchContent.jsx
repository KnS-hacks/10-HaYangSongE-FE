/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/forbid-prop-types */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { ReactComponent as Search } from '../../Assets/Icons/Search.svg';
import Colors from '../../Assets/Colors/Colors';
import Card from '../Common/Card';

const Container = styled.div`
  /* width: 100vw; */
`;

const InputBox = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 2.5px solid black;
  width: 95%;
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
  width: 85%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ResultBox2 = styled.div`
  display: flex;
  width: 90%;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const SearchContent = ({ listData }) => {
  const [searchText, setsearchText] = useState('');
  const [resultList, setresultList] = useState([]);
  // 서치 input handle
  const handleSearch = e => {
    setsearchText(e.target.value);
  };

  const searchOutput = () => {
    // 아무것도 입력이 안 된 경우 전체를 출력
    if (searchText === '') {
      setresultList(listData);
    }
    const filteredList = listData.filter(
      item => item.name.indexOf(searchText) > -1,
    );
    setresultList(filteredList);
  };

  // 입력값이 바뀔 때마다 필터링
  useEffect(() => {
    searchOutput();
  }, [searchText]);

  return (
    <Container>
      <InputBox>
        <input
          onChange={handleSearch}
          placeholder="식당 이름을 검색해보세요."
        />
        <Search width="40" height="40" stroke="black" />
      </InputBox>
      <div>
        <ResultNum>
          검색결과 <span>{resultList.length}</span>건
        </ResultNum>
        {resultList.length === 0 ? (
          <ResultBox>
            <p>일치하는 검색 결과가 없습니다.</p>
          </ResultBox>
        ) : (
          <ResultBox2>
            {resultList.map(item => (
              <Card
                title={item.name}
                address={item.branch_name}
                step={item.vaccine_condition}
                resId={item.id}
              />
            ))}
          </ResultBox2>
        )}
      </div>
    </Container>
  );
};

SearchContent.propTypes = {
  listData: PropTypes.any.isRequired,
};

export default SearchContent;
