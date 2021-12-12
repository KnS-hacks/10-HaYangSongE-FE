import React from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import Colors from '../../../Assets/Colors/Colors';
import { orderState, waitingState } from '../../../Recoil/Reservation';
import Button from '../../Common/Button';
import StyledLink from '../../Common/StyledLink';

const ModalTitleDiv = styled.div`
  font-weight: 700;
  display: flex;
  justify-content: center;
  padding: 20px;
  font-size: 1.3rem;
`;

const Content = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  // 번째 글씨
  & > p > span {
    font-size: 1.5rem;
    font-weight: 400;
  }
`;
const ButtonDiv = styled.div`
  button:nth-child(1) {
    margin-bottom: 10px;
  }
  button {
    font-size: 18px;
  }
`;

const Info = styled.p`
  font-size: 1.5rem;
  font-weight: 400;
  margin-bottom: 50px;
`;

const WaitingNum = styled.span`
  font-size: 5rem;
  color: ${Colors.main};
  padding-right: 10px;
`;

const WaitingTime = styled.p`
  font-size: 0.9rem;
  /* font-weight: 400; */
`;

// recoil 말고 계정에서 myreservation 조회해서 가져오기.
const Step3 = () => {
  const myOrder = useRecoilValue(orderState);
  const myWaiting = useRecoilValue(waitingState);
  return (
    <>
      <ModalTitleDiv>등록이 완료 되었습니다.</ModalTitleDiv>
      <Content>
        <Info>내 순서는</Info>
        <p>
          <span>
            <WaitingNum>{myOrder}</WaitingNum>번째
          </span>
          <WaitingTime>대기시간 약 {myWaiting}분</WaitingTime>
        </p>
      </Content>
      <ButtonDiv>
        <StyledLink Url="/district1">
          <Button Content="홈으로 이동하기" />
        </StyledLink>
        <StyledLink Url="/reservation">
          <Button
            Content="예약확인 페이지로 이동하기"
            backgroundColor={Colors.main}
            Color="#ffffff"
          />
        </StyledLink>
      </ButtonDiv>
    </>
  );
};

export default Step3;
