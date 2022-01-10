/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import propTypes from 'prop-types';
import React, { useState } from 'react';
import styled from 'styled-components';
import AdminListBox from '../Common/AdminListBox';

const Info = styled.span`
  font-size: 2rem;
  font-weight: 500;
  padding: 10px 10px;
  display: inline-block;
`;

const Time = styled.p`
  float: right;
  font-size: 1.3rem;
  padding: 10px 10px;
`;

const Lists = styled.div`
  clear: both;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const NoneText = styled.div`
  font-size: 1.2rem;
  font-weight: 500;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Item = styled.p`
  font-size: 1.2rem;
  font-weight: 500;
  padding: 15px 15px;

  :hover {
    cursor: pointer;
    color: white;
    background-color: #ff6078;
    transition: 0.2s;
  }
`;

const TESTDATA1 = [
  {
    id: 1,
    name: '맥도날드 두정 DT 점',
  },
  {
    id: 2,
    name: '두꺼비 식당',
  },
];

const TESTDATA2 = ['밈미', '옹이', '기다리는 사람'];
const TESTDATA3 = ['테스트1', '테스트2', '테스트3'];

const HostContents = ({ userName, nowTime }) => {
  const [waitingList, setwaitingList] = useState([]);
  const selectRes = e => {
    if (e.target.id === '0') {
      setwaitingList(TESTDATA2);
    } else {
      setwaitingList(TESTDATA3);
    }
  };
  return (
    <>
      <Info>{userName}</Info>
      <Time>{nowTime}</Time>
      <Lists>
        <AdminListBox title="식당 목록">
          <div>
            {TESTDATA1.map((item, index) => (
              <Item key={item.id} id={index} onClick={selectRes}>
                {item.name}
              </Item>
            ))}
          </div>
        </AdminListBox>
        <AdminListBox title="식당 대기열 목록">
          <>
            {waitingList.length === 0 ? (
              <NoneText>대기열 목록이 없습니다.</NoneText>
            ) : (
              waitingList.map(item => <Item>{item}</Item>)
            )}
          </>
        </AdminListBox>
        <AdminListBox title="현재 수락된 대기열 목록" />
      </Lists>
    </>
  );
};

HostContents.propTypes = {
  userName: propTypes.string.isRequired,
  nowTime: propTypes.string,
};

HostContents.defaultProps = {
  nowTime: 'none',
};

export default HostContents;
