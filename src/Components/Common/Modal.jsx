/* eslint-disable react/forbid-prop-types */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Dim from './Dim';

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
const Modal = ({ visible, closeModal, current }) => {
  return (
    <>
      <Dim visible={visible} closeModal={closeModal} />
      <ModalDiv visible={visible}>
        <Contents>{current}</Contents>
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
  visible: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  current: PropTypes.any.isRequired,
};

export default Modal;
