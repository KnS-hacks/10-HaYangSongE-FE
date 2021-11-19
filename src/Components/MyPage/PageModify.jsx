import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Button from '../Common/Button';
import Colors from '../../Assets/Colors/Colors';

// 안녕하세요 ㅇㅇ님이랑 버튼 묶는 헤더
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1550px;
  text-align: center;
  height: 50px;
  padding: 20px;
`;

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

// 회원정보 아이템 하나 p는 정보이름 input은 값(입력받기)
const Container = styled.div`
  width: 700px;
  font-size: 1.2rem;
  padding: 0 100px 40px 0;
  span {
    font-weight: 700;
    padding-bottom: 20px;
  }
  input {
    padding: 10px;
    font-family: 'Pretendard Variable';
    font-size: inherit;
    width: 700px;
    height: 40px;
  }
`;

// eslint-disable-next-line react/prop-types
const Contents = ({ userName, userID, userNumber, userStep, userDate }) => {
  const changeID = e => {
    console.log(e.target.value);
  };
  const changeNum = e => {
    console.log(e.target.value);
  };
  const changeStep = e => {
    console.log(e.target.value);
  };
  const changeDate = e => {
    console.log(e.target.value);
  };

  return (
    <div>
      <Header>
        <Info>안녕하세요, {userName} 님</Info>
        <Button
          Content="확인"
          width="100%"
          Height="50px"
          backgroundColor={Colors.main}
          Color="#ffffff"
        />
      </Header>
      <Wrapper>
        <Container>
          <span>아이디</span>
          <input type="text" placeholder={userID} onChange={changeID} />
        </Container>
        <Container>
          <span>휴대폰번호</span>
          <input type="text" placeholder={userNumber} onChange={changeNum} />
        </Container>
      </Wrapper>
      <Wrapper>
        <Container>
          <span>백신접종여부</span>
          <input
            type="number"
            placeholder={userStep}
            min="0"
            max="2"
            onChange={changeStep}
          />
        </Container>
        <Container>
          <span>마지막 접종일</span>
          <input type="date" placeholder={userDate} onChange={changeDate} />
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
  userTag: PropTypes.number,
  userDate: PropTypes.string,
};

Contents.defaultProps = {};

export default Contents;
