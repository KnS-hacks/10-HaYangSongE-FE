import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Dim from './Dim';
// import Button from './Button';
// import Colors from '../../Assets/Colors/Colors';
import Step1 from '../Detail/Reservation/Step1';
import Step2 from '../Detail/Reservation/Step2';
import Step3 from '../Detail/Reservation/Step3';

const ModalDiv = styled.div`
  font-family: 'Pretendard Variable';
  display: ${props => (props.visible ? 'block' : 'none')};
  position: fixed;
  text-align: center;
  top: 10%;
  left: 35%;
  z-index: 1;
  box-sizing: border-box;
  width: 380px;
  height: 500px;
  padding: 16px;
  border-radius: 16px;
  background-color: #ffffff;
  button {
    /* font-size: 1.3rem; */
    border-radius: 50px;
  }
`;

const Contents = styled.div`
  width: 100%;
`;

// props로 제목, 설명, visible(모달창 속성), closeModal(모달을 닫는 func) 을 받습니다.
const Modal = ({
  visible,
  closeModal,
  restaurantName,
  waiting,
  address,
  step,
}) => {
  // 다음 단계로 넘어가는 함수
  const [CurrentPage, setCurrentPage] = useState(0);
  const increasePage = () => {
    setCurrentPage(CurrentPage + 1);
  };
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
      <Dim visible={visible} closeModal={closeModal} />
      <ModalDiv visible={visible}>
        <Contents>{PAGES[CurrentPage]}</Contents>
        {/* <Button
          ClickFunc={increasePage}
          backgroundColor={Colors.main}
          Content="확인"
          Color="#ffffff"
        /> */}
      </ModalDiv>
    </>
  );
};

Modal.propTypes = {
  // title: PropTypes.string.isRequired,
  visible: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  restaurantName: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  waiting: PropTypes.number.isRequired,
  step: PropTypes.number.isRequired,
};

export default Modal;
