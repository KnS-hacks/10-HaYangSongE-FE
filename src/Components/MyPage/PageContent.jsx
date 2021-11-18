import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Tag from '../Common/Tag';
import Button from '../Common/Button';

// 안녕하세요 ㅇㅇ님이랑 버튼 묶는 헤더
const Header = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
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

// 아이템 두개씩 묶기
const Wrapper = styled.div`
  display: flex;
  padding: 30px;
`;

// 마이페이지 데이터 하나
// p는 마이페이지 아이디, 핸드폰번호, 백신접종여부, 마지막 접종일 타이틀
// span은 받아오는 데이터값
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 1.2rem;
  padding-right: 30px;
  p {
    font-weight: 700;
    padding-bottom: 20px;
  }
  span {
    padding: 10px;
    width: 300px;
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
          <p>아이디</p>
          <span>{userID}</span>
        </Container>
        <Container>
          <p>휴대폰번호</p>
          <span>{userNumber}</span>
        </Container>
      </Wrapper>
      <Wrapper>
        <Container>
          <p>백신접종여부</p>
          <span>
            <Tag step={userStep} />
          </span>
        </Container>
        <Container>
          <p>마지막 접종일</p>
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
