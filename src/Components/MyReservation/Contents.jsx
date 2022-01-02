/* eslint-disable no-alert */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import Colors from '../../Assets/Colors/Colors';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 30vw;
  height: 55vh;
`;

const Info = styled.p`
  font-weight: 700;
  font-size: 2rem;
  line-height: 45px;
  text-align: center;
  span {
    color: ${Colors.main};
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  span {
    display: block;
    width: 220px;
    height: 60px;
  }
  & > p:nth-child(1) {
    font-size: 1.5rem;
    font-weight: 700;
  }
  & > p:nth-child(2) {
    font-size: 1.5rem;
    text-align: center;
  }
`;

const CancelBtn = styled.button`
  font-family: inherit;
  font-size: 1.3rem;
  width: 31vw;
  height: 65px;
  background-color: '#e8e8e8';
  border: none;
  margin-top: 10px;
  font-size: 400;
  &:hover {
    color: white;
    cursor: pointer;
    transition: 0.3s;
    background-color: ${Colors.Name_tag};
  }
`;

const NoneDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 70vh;
  font-size: 1.8rem;
  font-weight: 700;
`;

const Contents = ({ remainTime, order, resName, peopleNum }) => {
  const history = useNavigate();
  // 줄서기 취소이벤트
  const cancel = () => {
    if (window.confirm('정말 줄서기를 취소하시나요?')) {
      alert('줄서기가 취소되었습니다.');
      history.push('/district1');
    }
  };

  if (!resName) {
    return (
      <Wrapper>
        <NoneDiv>
          <p>예약 정보가 없습니다.</p>
        </NoneDiv>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <Container>
        <Info>
          매장입장까지
          <br />약 <span>{remainTime}</span>분 남았어요.
        </Info>
        <Content>
          <p>
            <span>매장명</span>
            <span>현재 순서</span>
            <span>예약 인원</span>
          </p>
          <p>
            <span>{resName}</span>
            <span>{order}번째</span>
            <span>{peopleNum}명</span>
          </p>
        </Content>
      </Container>
      <CancelBtn onClick={cancel}>줄서기 취소</CancelBtn>
    </Wrapper>
  );
};

Contents.propTypes = {
  remainTime: PropTypes.number,
  order: PropTypes.number,
  resName: PropTypes.string,
  peopleNum: PropTypes.number,
};

Contents.defaultProps = {
  remainTime: 0,
  order: 0,
  resName: '',
  peopleNum: 0,
};

export default Contents;
