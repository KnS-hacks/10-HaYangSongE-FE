import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Tag from '../Common/Tag';
import Button from '../Common/Button';

// 안녕하세요 ㅇㅇ님이랑 버튼 묶는 헤더
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1550px;
  text-align: center;
  height: 50px;
  padding: 20px;
`;

// 안녕하세요 ㅇㅇㅇ님
const Info = styled.p`
  font-weight: 700;
  font-size: 2rem;
  line-height: 45px;
  text-align: center;
`;

// 아이템 컨테이너 묶기
const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 1600px;
  padding: 30px;
`;

// 마이페이지 데이터 하나
// span은 받아오는 데이터값
const Container = styled.div`
  width: 700px;
  font-size: 1.2rem;
  font-weight: 700;
  padding: 0 100px 80px 0;
  span:nth-child(1) {
    padding-bottom: 20px;
  }
  span:nth-child(2) {
    display: block;
    padding: 20px;
    width: 700px;
    height: 40px;
    line-height: 40px;
    box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px;
  }
`;

// 각각 하양송이, 아이디값, 핸드폰번호값, 날짜 받아오기 => 태그는...
// eslint-disable-next-line react/prop-types
const Contents = ({ userName, userID, userNumber, userStep, userDate }) => {
  return (
    <div>
      <Header>
        <Info>안녕하세요, {userName} 님</Info>
        <Button Content="내 정보 수정하기" width="100%" Height="50px" />
      </Header>
      <Wrapper>
        <Container>
          <span>아이디</span>
          <span>{userID}</span>
        </Container>
        <Container>
          <span>휴대폰번호</span>
          <span>{userNumber}</span>
        </Container>
        <Container>
          <span>백신접종여부</span>
          <span>
            <Tag step={userStep} />
          </span>
        </Container>
        <Container>
          <span>마지막 접종일</span>
          <span>{userDate}</span>
        </Container>
      </Wrapper>
    </div>
  );
};

// eslint-disable-next-line react/no-typos
Contents.PropTypes = {
  userName: PropTypes.string,
  userID: PropTypes.string,
  userNumber: PropTypes.string,
  userStep: PropTypes.number,
  userDate: PropTypes.string,
};

export default Contents;
