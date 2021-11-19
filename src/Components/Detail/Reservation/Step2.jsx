/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useRecoilState, useRecoilValue } from 'recoil';
import { useHistory } from 'react-router-dom';
import Button from '../../Common/Button';
import Colors from '../../../Assets/Colors/Colors';
import {
  friendsState,
  reservationState,
  restaurantState,
} from '../../../Recoil/Reservation';
import { UserData } from '../../../Recoil/User';
import { waitingCreate } from '../../../api/Restaurant';

const ModalTitleDiv = styled.div`
  font-weight: 700;
  display: flex;
  justify-content: center;
  padding: 20px;
  font-size: 1.3rem;
`;

const Content = styled.div`
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  & > div:nth-child(1) {
    width: 30%;
    font-weight: 400;
    text-align: left;
    margin-right: 25px;
  }
  & > div:nth-child(2) {
    width: 30%;
    font-weight: 700;
    margin-left: 25px;
  }
  p {
    height: 55px;
  }
`;

const ButtonDiv = styled.div`
  button:nth-child(2) {
    margin-top: 10px;
  }
  button {
    font-size: 18px;
  }
`;

const PersonDiv = styled.p`
  width: 130px;
  height: 100px;
  text-align: left;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    background-color: '#ffffff';
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${Colors.main};
  }
`;

const Person = styled.span`
  display: block;
  height: 10px;
  /* font-weight: 300; */
  font-size: 0.9rem;
  padding-bottom: 15px;
`;

const Step2 = ({ restaurantName, increasePageFunc, decreasePageFunc }) => {
  const history = useHistory();
  const [Today, setToday] = useState('');
  const [waitingRes, setwaitingRes] = useState();
  // 현재 날짜 가져오는 함수
  const createDate = () => {
    const today = new Date();
    const nowYear = today.getFullYear();
    const nowMonth = today.getMonth() + 1;
    const nowDate = today.getDate();
    setToday(`${nowYear}.${nowMonth}.${nowDate}`);
  };
  // recoil 에서 저장한 배열, 현재 user, 현재 식당의 pk 가져오기
  const people = useRecoilValue(friendsState);
  const user = useRecoilValue(UserData);
  const resId = useRecoilValue(restaurantState);

  // recoil 에 예약 정보를 저장하기
  const [MyReservation, setMyreservation] = useRecoilState(reservationState);
  // waiting 제출 및 다음 단계 실행 함수
  // User의 예약 정보는 Recoil 에 저장하기.
  const fetch = async () => {
    const values = {
      restaurant: Number(resId),
      leader: user.username,
      member: people,
    };
    try {
      const res = await waitingCreate(values);
      setwaitingRes(res);
      setMyreservation(res.data);
      // 등록 되면 다음페이지로 이동
      increasePageFunc();
    } catch (error) {
      setMyreservation({});
      alert('식당에서 요구하는 백신 접종 차수에 미달합니다.');
      alert('예약을 종료하고 홈 화면으로 돌아갑니다.');
      history.push('/district1');
    }
  };
  const submitWaiting = () => {
    // waiting 등록하기.
    fetch();
  };

  useEffect(() => {
    createDate();
  }, []);

  return (
    <>
      <ModalTitleDiv>{restaurantName}</ModalTitleDiv>
      <Content>
        <div>
          <p>예약 일자</p>
          <p>예약자</p>
          <p>예약 인원</p>
          <p>인원 정보</p>
        </div>
        <div>
          <p>{Today}</p>
          <p>{user.username}</p>
          <p>{people.length + 1} 명</p>
          <PersonDiv>
            {people.map(person => (
              <Person>
                {person.username}
                <br />
              </Person>
            ))}
          </PersonDiv>
        </div>
      </Content>
      <ButtonDiv>
        <Button ClickFunc={decreasePageFunc} Content="아니요, 다시할게요." />
        <Button
          ClickFunc={submitWaiting}
          backgroundColor={Colors.main}
          Color="#ffffff"
          Content="네, 등록할게요."
        />
      </ButtonDiv>
    </>
  );
};

Step2.propTypes = {
  restaurantName: PropTypes.string.isRequired,
  increasePageFunc: PropTypes.func.isRequired,
  decreasePageFunc: PropTypes.func.isRequired,
};

export default Step2;
