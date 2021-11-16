import React, { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as Id } from '../../../Assets/Icons/Id.svg';
import Colors from '../../../Assets/Colors/Colors';

const Container = styled.div`
  width: 100%;
  height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const InputBox = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1.4px solid black;
  input {
    font-family: inherit;
    font-size: 0.9rem;
    border: none;
    padding: 5px;
  }

  input:focus {
    outline: none;
  }
`;

const Info = styled.div`
  height: 180px;
  & :nth-child(1) {
    font-size: 1.4rem;
    margin-bottom: 40px;
  }
  & :nth-child(2) {
    font-size: 3.5rem;
    font-weight: 700;
  }
`;

const Tag = styled.p`
  display: inline-block;
  background-color: ${Colors.Name_tag};
  color: white;
  border-radius: 100px;
  padding: 5px 10px;
  margin: 2px 5px;
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  width: 100%;
  height: 50px;
  overflow: auto;
  overflow-x: hidden;
  :hover {
    cursor: pointer;
  }
`;

const NoneInfo = styled.p`
  font-size: 0.8rem;
  opacity: 0.4;
`;

const Step1 = () => {
  const [people, setpeople] = useState('');
  const [friends, setfriends] = useState([]);
  const changePeople = e => {
    setpeople(e.target.value);
  };

  const chageList = e => {
    if (e.keyCode === 13 && people) {
      setfriends([...friends, people]);
      setpeople('');
      e.target.value = '';
    }
  };

  // 삭제 로직
  const delItem = e => {
    setfriends(friends.filter(friend => friend !== e.target.innerHTML));
  };

  return (
    <Container>
      <InputBox>
        <Id width="18" height="18" />
        <input
          onChange={changePeople}
          onKeyUp={chageList}
          placeholder="일행의 계정을 태그해보세요."
        />
      </InputBox>
      <Tags>
        {friends.length === 0 ? (
          <Tags>
            <NoneInfo>현재 태그된 계정이 없습니다.</NoneInfo>
          </Tags>
        ) : (
          friends.map(tag => (
            <Tag onClick={delItem}>
              <span>{tag}</span>
            </Tag>
          ))
        )}
      </Tags>
      <Info>
        <p>현재입력된인원</p>
        <p>{friends.length} 명</p>
      </Info>
    </Container>
  );
};

export default Step1;
