/* eslint-disable no-unused-vars */
/* eslint-disable react/forbid-prop-types */
import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useRecoilState } from 'recoil';
import Colors from '../../Assets/Colors/Colors';
import Button from '../Common/Button';
import Modal from '../Common/Modal';
import { friendsState, restaurantState } from '../../Recoil/Reservation';
import Step1 from './Reservation/Step1';
import Step2 from './Reservation/Step2';
import Step3 from './Reservation/Step3';

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 800px;

  div p:nth-child(1) {
    border-bottom: 2px solid #8f8f8f5e;
  }
`;

const Title = styled.p`
  width: 500px;
  font-size: 2.5rem;
  padding-bottom: 10px;
`;

const ResPic = styled.img`
  width: 500px;
  height: 500px;
`;

const Info = styled.p`
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  font-family: 500;
`;

const Menu = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(${props => props.rowNum}, 80px);
  width: 500px;
  /* text-align: center; */
  div {
    font-size: 1.3rem;
  }

  div:nth-child(2n-1) {
    font-weight: 500;
  }
  // 가격 text
  div:nth-child(2n) {
    text-align: center;
  }
`;

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

const Content = ({
  pic,
  restaurantName,
  menu,
  waiting,
  address,
  step,
  resId,
}) => {
  const [visible, setVisible] = useState(false);
  const [ResId, setResId] = useRecoilState(restaurantState);
  const [FriendsList, setFriendsList] = useRecoilState(friendsState);
  // 현재 페이지 번호를 매기는 state
  const [CurrentPage, setCurrentPage] = useState(0);

  // 모달 열기
  const toggleModal = () => {
    setVisible(true);
    setResId(resId);
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
        <div>
          <ResPic src={pic} />
        </div>
        <div>
          <Title>MENU</Title>
          {menu.length ? (
            <Menu rowNum={menu.length}>
              {menu.map(item => (
                <>
                  <div>{item.name}</div>
                  <div>{item.price} 원</div>
                </>
              ))}
            </Menu>
          ) : (
            <Info>등록된 메뉴가 없습니다.</Info>
          )}
        </div>
      </Container>
      <BtnDiv>
        {/* <Button
          ClickFunc={toggleModal}
          Width="80%"
          Height="80px"
          Content="바로 줄서기"
          backgroundColor={Colors.main}
          Color="#ffffff"
        /> */}
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
  pic: PropTypes.string,
  restaurantName: PropTypes.string,
  menu: PropTypes.array,
  address: PropTypes.string,
  waiting: PropTypes.number,
  step: PropTypes.number,
  resId: PropTypes.any.isRequired,
};

Content.defaultProps = {
  pic: '',
  restaurantName: '',
  menu: [],
  address: '',
  waiting: 0,
  step: 0,
};

export default Content;
