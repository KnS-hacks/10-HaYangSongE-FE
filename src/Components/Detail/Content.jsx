/* eslint-disable no-unused-vars */
/* eslint-disable react/forbid-prop-types */
import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useRecoilState } from 'recoil';
import Colors from '../../Assets/Colors/Colors';
import TestRes from '../../Assets/Images/TestRestaurant.jpg';
import Button from '../Common/Button';
import Modal from '../Common/Modal';
import { friendsState, restaurantState } from '../../Recoil/Reservation';
import Step1 from './Reservation/Step1';
import Step2 from './Reservation/Step2';
import Step3 from './Reservation/Step3';

const BtnDiv = styled.div`
  button {
    min-width: 500px;
    margin-left: 10px;
    margin-bottom: 20px;
    position: fixed;
    bottom: 0;
    border-radius: 50px;
  }
`;

const Container = styled.div``;

const Content = ({ restaurantName, waiting, address, step, match }) => {
  const [visible, setVisible] = useState(false);
  const [ResId, setResId] = useRecoilState(restaurantState);
  const [FriendsList, setFriendsList] = useRecoilState(friendsState);
  // 현재 페이지 번호를 매기는 state
  const [CurrentPage, setCurrentPage] = useState(0);

  // 모달 열기
  const toggleModal = () => {
    setVisible(true);
    setResId(match.params.resId);
  };

  // 모달 닫기
  const closeModal = () => {
    setVisible(false);
    // 닫으면 단계 0으로
    setCurrentPage(0);
    // 닫으면 태그한 계정 없음
    setFriendsList([]);
  };

  // 다음 단계로 넘어가는 함수
  const increasePage = () => {
    setCurrentPage(CurrentPage + 1);
  };
  // 이전 단계로 넘어가는 함수
  const decreasePage = () => {
    setCurrentPage(CurrentPage - 1);
  };

  const PAGES = [
    <Step1 increasePageFunc={increasePage} />,
    <Step2
      restaurantName={restaurantName}
      waiting={waiting}
      address={address}
      step={step}
      increasePageFunc={increasePage}
      decreasePageFunc={decreasePage}
    />,
    <Step3 />,
  ];

  return (
    <>
      <Container>
        <img src={TestRes} alt="restaurantPic" />
        <img src={TestRes} alt="restaurantPic" />
        <img src={TestRes} alt="restaurantPic" />
        <img src={TestRes} alt="restaurantPic" />
        <img src={TestRes} alt="restaurantPic" />
        <img src={TestRes} alt="restaurantPic" />
        <img src={TestRes} alt="restaurantPic" />
      </Container>
      <BtnDiv>
        <Button
          ClickFunc={toggleModal}
          Width="80%"
          Height="80px"
          Content="바로 줄서기"
          backgroundColor={Colors.main}
          Color="#ffffff"
        />
      </BtnDiv>
      <Modal
        title="대기 등록"
        visible={visible}
        closeModal={closeModal}
        current={PAGES[CurrentPage]}
      />
    </>
  );
};

Content.propTypes = {
  restaurantName: PropTypes.string,
  address: PropTypes.string,
  waiting: PropTypes.number,
  step: PropTypes.number,
  match: PropTypes.any.isRequired,
};

Content.defaultProps = {
  restaurantName: '',
  address: '',
  waiting: 0,
  step: 0,
};

export default Content;
