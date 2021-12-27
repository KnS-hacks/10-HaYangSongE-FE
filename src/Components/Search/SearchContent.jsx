/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/forbid-prop-types */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { ReactComponent as Search } from '../../Assets/Icons/Search.svg';
import Colors from '../../Assets/Colors/Colors';
import Card from '../Common/Card';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 90vw;
`;

const InputBox = styled.div`
  display: flex;
  border-bottom: 2.5px solid black;
  margin-top: 3vh;
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
  margin-top: 3vh;
  display: flex;
  flex-wrap: wrap;
  overflow-y: auto;
`;

// props 로 서치 결과 list 와 input 을 핸들링 하는 함수 handleInput 을 받는다.
const SearchContent = ({ listData, handleInput }) => {
  return (
    <Container>
      <InputBox>
        <input onChange={handleInput} placeholder="식당 이름을 검색해보세요." />
        <Search width="40" height="40" stroke="black" />
      </InputBox>
      <div>
        <ResultNum>
          검색결과 <span>{listData.length}</span>건
        </ResultNum>
        {listData.length === 0 ? (
          <ResultBox>
            <p>일치하는 검색 결과가 없습니다.</p>
          </ResultBox>
        ) : (
          <ResultBox2>
            {listData.map(item => (
              <Card
                title={item.name}
                address={item.branch_name}
                step={item.vaccine_condition}
                resId={item.id}
                pic={item.restaurant_photo}
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
  handleInput: PropTypes.func.isRequired,
};

export default SearchContent;
