/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useRecoilState } from 'recoil';
import PropTypes from 'prop-types';
import { ReactComponent as Id } from '../../../Assets/Icons/Id.svg';
import Colors from '../../../Assets/Colors/Colors';
import { friendsState } from '../../../Recoil/Reservation';
import Button from '../../Common/Button';
import { addList, clearList, delList } from '../../../module/redux/reservation';

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
  // dispatch ??? ???????????? redux ?????? ?????? ??????????????? ???.
  const dispatch = useDispatch();
  // list ????????? ???????????? selector
  const FriendsList = useSelector(state => state.reservation);
  // ????????? ????????? ???????????? people state
  const [people, setpeople] = useState('');
  const [Friends, setFriends] = useState([]);
  const [Active, setActive] = useState(true);

  const changePeople = e => {
    setpeople(e.target.value);
  };

  const changeList = e => {
    if (e.keyCode === 13 && people) {
      dispatch(addList(people));
      setpeople('');
      e.target.value = '';
    }
  };

  const checkList = () => {
    if (FriendsList.length === 0) {
      setActive(true);
    } else {
      setActive(false);
    }
  };

  useEffect(() => {
    // DOM ??? ????????????, ????????? ??? return ??? ??????
    checkList();
    return dispatch(clearList());
  }, [FriendsList]);

  // ?????? ??????
  const delItem = e => {
    dispatch(delList(e.target.innerHTML));
    // console.log(FriendsList);
  };

  return (
    <>
      <ModalTitleDiv>?????? ??????</ModalTitleDiv>

      <Container>
        <InputBox>
          <Id width="18" height="18" />
          <input
            onChange={changePeople}
            onKeyUp={changeList}
            placeholder="????????? ????????? ??????????????????."
          />
        </InputBox>
        <Tags>
          {FriendsList.length === 0 ? (
            <Tags>
              <NoneInfo>?????? ????????? ????????? ????????????.</NoneInfo>
            </Tags>
          ) : (
            FriendsList.map(tag => (
              <Tag onClick={delItem}>
                <span>{tag.username}</span>
              </Tag>
            ))
          )}
        </Tags>
        <Info>
          <p>?????? ????????? ??????</p>
          <p>{FriendsList.length} ???</p>
        </Info>
      </Container>
      <Button Content="??????" ClickFunc={increasePageFunc} Disabled={Active} />
    </>
  );
};

Step1.propTypes = {
  increasePageFunc: PropTypes.func.isRequired,
};

export default Step1;
