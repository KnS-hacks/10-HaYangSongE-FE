import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import Button from '../../Common/Button';
import Colors from '../../../Assets/Colors/Colors';
import { friendsState } from '../../../Recoil/Reservation';

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
  const [Today, setToday] = useState('');

  // 현재 날짜 가져오는 함수
  const createDate = () => {
    const today = new Date();
    const nowYear = today.getFullYear();
    const nowMonth = today.getMonth() + 1;
    const nowDate = today.getDate();
    setToday(`${nowYear}.${nowMonth}.${nowDate}`);
  };
  const people = useRecoilValue(friendsState);
  // waiting 제출 및 다음 단계 실행 함수
  // User의 예약 정보는 Recoil 에 저장하기.
  const submitWaiting = () => {
    increasePageFunc();
    // 이 뒤로 api 실행
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
          <p>하유민</p>
          <p>{people.length} 명</p>
          <PersonDiv>
            {people.map(person => (
              <Person>
                {person}
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
