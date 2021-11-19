/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import PropTypes from 'prop-types';
import { ReactComponent as Id } from '../../../Assets/Icons/Id.svg';
import Colors from '../../../Assets/Colors/Colors';
import { friendsState } from '../../../Recoil/Reservation';
import Button from '../../Common/Button';

const Container = styled.div`
  width: 100%;
  height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const ModalTitleDiv = styled.div`
  font-weight: 700;
  display: flex;
  justify-content: center;
  padding: 20px;
  font-size: 1.3rem;
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

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    background-color: '#ffffff';
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${Colors.black};
  }
`;

const NoneInfo = styled.p`
  font-size: 0.8rem;
  opacity: 0.4;
`;

const Step1 = ({ increasePageFunc }) => {
  const [people, setpeople] = useState('');
  const [Friends, setFriends] = useRecoilState(friendsState);
  const [Active, setActive] = useState(true);
  const changePeople = e => {
    setpeople(e.target.value);
  };

  const chageList = e => {
    if (e.keyCode === 13 && people) {
      setFriends([...Friends, { username: people }]);
      console.log(Friends);
      setpeople('');
      e.target.value = '';
    }
  };

  const checkList = () => {
    if (Friends.length === 0) {
      setActive(true);
    } else {
      setActive(false);
    }
  };

  useEffect(() => {
    checkList();
  }, [Friends]);

  // 삭제 로직
  const delItem = e => {
    setFriends(
      Friends.filter(friend => friend.username !== e.target.innerHTML),
    );
  };

  return (
    <>
      <ModalTitleDiv>대기 등록</ModalTitleDiv>

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
          {Friends.length === 0 ? (
            <Tags>
              <NoneInfo>현재 태그된 계정이 없습니다.</NoneInfo>
            </Tags>
          ) : (
            Friends.map(tag => (
              <Tag onClick={delItem}>
                <span>{tag.username}</span>
              </Tag>
            ))
          )}
        </Tags>
        <Info>
          <p>현재 입력된 인원</p>
          <p>{Friends.length} 명</p>
        </Info>
      </Container>
      <Button Content="확인" ClickFunc={increasePageFunc} Disabled={Active} />
    </>
  );
};

Step1.propTypes = {
  increasePageFunc: PropTypes.func.isRequired,
};

export default Step1;
