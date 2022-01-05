import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import Tag from '../Common/Tag';
import Button from '../Common/Button';
import Inputs, { InputNum } from '../Common/Inputs';

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  height: 80px;
`;

// 안녕하세요 ㅇㅇㅇ님
const Info = styled.p`
  font-weight: 700;
  font-size: 2rem;
  line-height: 45px;
  text-align: center;
  min-width: 300px;
`;

// 아이템 컨테이너 묶기
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 90%;
`;

// 마이페이지 데이터 하나
// span은 받아오는 데이터값
const Container = styled.div`
  width: 500px;
  /* height: 45px; */
  font-size: 1.2rem;
  margin-bottom: 20px;
  span:nth-child(1) {
    font-weight: 700;
    font-size: 1.2rem;
    display: inline-block;
    width: 140px;
    padding: 0;
    margin: 0;
  }
  span:nth-child(2) {
    display: inline-block;
    font-size: 1.2rem;
    padding: 0;
    margin: 0;
  }
`;

// 각각 하양송이, 아이디값, 핸드폰번호값, 날짜 받아오기 => 태그는...
// eslint-disable-next-line react/prop-types
const Contents = ({
  userName,
  userID,
  userNumber,
  userStep,
  userDate,
  editFunc,
  editState,
  inputFunc,
}) => {
  return (
    <div>
      <Header>
        <Info>안녕하세요, {userName} 님</Info>
        <Button
          Content="내 정보 수정하기"
          width="100%"
          Height="50px"
          ClickFunc={editFunc}
        />
      </Header>
      <Wrapper>
        {editState ? (
          <Inputs
            inputName="username"
            inputContent="아이디"
            inputValue={userID}
            inputWidth="320px"
            inputChange={inputFunc}
          />
        ) : (
          <Container>
            <span>아이디</span>
            <span>{userID}</span>
          </Container>
        )}
        {editState ? (
          <Inputs
            inputName="phone_number"
            inputContent="휴대폰 번호"
            inputValue={userNumber}
            inputWidth="320px"
            inputChange={inputFunc}
          />
        ) : (
          <Container>
            <span>휴대폰 번호</span>
            <span>{userNumber}</span>
          </Container>
        )}
        {editState ? (
          <InputNum
            inputName="vaccine_step"
            inputContent="예방접종 내역"
            inputValue={userStep}
            inputChange={inputFunc}
          />
        ) : (
          <Container>
            <span>예방접종 내역</span>
            <Tag>{userStep}</Tag>
          </Container>
        )}
        {editState ? (
          <Inputs
            inputType="vaccine_date"
            inputContent="마지막 접종일"
            inputName="lastDate"
            inputValue={userDate}
            inputWidth="320px"
            inputChange={inputFunc}
          />
        ) : (
          <Container>
            <span>예방접종 내역</span>
            <span>{userDate}</span>
          </Container>
        )}
      </Wrapper>
    </div>
  );
};

Contents.propTypes = {
  userName: propTypes.string.isRequired,
  userID: propTypes.string.isRequired,
  userNumber: propTypes.string.isRequired,
  userStep: propTypes.number.isRequired,
  userDate: propTypes.string.isRequired,
  editFunc: propTypes.func.isRequired,
  editState: propTypes.bool.isRequired,
  inputFunc: propTypes.func.isRequired,
};

export default Contents;
