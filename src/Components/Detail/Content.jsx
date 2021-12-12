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
import { restaurantState } from '../../Recoil/Reservation';

const BtnDiv = styled.div`
  /* width: 100%; */
  button {
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
  const toggleModal = () => {
    setVisible(true);
    setResId(match.params.resId);
  };

  const closeModal = () => {
    setVisible(false);
  };

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
        // 가게 정보
        restaurantName={restaurantName}
        waiting={waiting}
        address={address}
        step={step}
      />
    </>
  );
};

Content.propTypes = {
  restaurantName: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  waiting: PropTypes.number.isRequired,
  step: PropTypes.number.isRequired,
  match: PropTypes.any.isRequired,
};

export default Content;
