import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Dim from './Dim';
import Button from './Button';
import Colors from '../../Assets/Colors/Colors';
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
  width: 350px;
  height: 500px;
  padding: 16px;
  border-radius: 16px;
  background-color: #ffffff;
  button {
    font-size: 1.3rem;
    border-radius: 50px;
  }
`;

const Contents = styled.div`
  width: 100%;
`;

const ModalTitleDiv = styled.div`
  font-weight: 700;
  display: flex;
  justify-content: center;
  padding: 20px;
  font-size: 1.3rem;
`;

// props로 제목, 설명, visible(모달창 속성), closeModal(모달을 닫는 func) 을 받습니다.
const Modal = ({ title, visible, closeModal }) => {
  const STEPS = [<Step1 />, <Step2 />, <Step3 />];
  const [step, setstep] = useState(0);
  const increaseStep = () => {
    setstep(step + 1);
  };

  return (
    <>
      <Dim visible={visible} closeModal={closeModal} />
      <ModalDiv visible={visible}>
        <ModalTitleDiv>{title}</ModalTitleDiv>
        <Contents>{STEPS[step]}</Contents>
        <Button
          ClickFunc={increaseStep}
          backgroundColor={Colors.main}
          Content="확인"
          Color="#ffffff"
        />
      </ModalDiv>
    </>
  );
};

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  visible: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default Modal;
