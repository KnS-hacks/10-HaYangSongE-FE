import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Tag from '../Common/Tag';
import Button from '../Common/Button';
// import Colors from '../../Assets/Colors/Colors';
// 안녕하세요 ㅇㅇ님이랑 버튼 묶는 헤더
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
  flex-wrap: wrap;
  width: 90%;
`;

// 마이페이지 데이터 하나
// span은 받아오는 데이터값
const Container = styled.div`
  width: 500px;
  font-size: 1.4rem;
  span:nth-child(1) {
    font-weight: 700;
  }
  span:nth-child(2) {
    display: block;
    padding: 30px 0;
  }
`;

// 각각 하양송이, 아이디값, 핸드폰번호값, 날짜 받아오기 => 태그는...
// eslint-disable-next-line react/prop-types
const Contents = ({ userName, userID, userNumber, userStep, userDate }) => {
  const navigate = useNavigate();
  const routeChange = () => {
    navigate('./modifypage');
  };
  return (
    <div>
      <Header>
        <Info>안녕하세요, {userName} 님</Info>
        <Button
          Content="내 정보 수정하기"
          width="100%"
          Height="50px"
          ClickFunc={routeChange}
        />
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
  userName: PropTypes.string.isRequired,
  userID: PropTypes.string.isRequired,
  userNumber: PropTypes.string.isRequired,
  userStep: PropTypes.number.isRequired,
  userDate: PropTypes.string.isRequired,
};

export default Contents;
