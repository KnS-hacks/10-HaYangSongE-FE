/* eslint-disable no-unused-vars */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import propTypes from 'prop-types';
import React, { useState } from 'react';
import styled from 'styled-components';
import AdminListBox from '../Common/AdminListBox';
import Tag from '../Common/Tag';

const Info = styled.span`
  font-size: 1.3rem;
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

const MemberItem = styled.div`
  font-size: 1.2rem;
  font-weight: 500;
  padding: 15px 15px;
  display: flex;
  align-items: center;

  p:nth-child(1) {
    width: 180px;
  }
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

const HostContents = ({ userName, nowTime, resList }) => {
  const [waitingList, setwaitingList] = useState([]);
  const [memberList, setmemberList] = useState([]);
  const selectRes = e => {
    setwaitingList(resList[e.target.id].waitings);
  };
  const selectWaiting = e => {
    setmemberList(waitingList[e.target.id].member);
  };
  return (
    <>
      <Info>{userName} 님 안녕하세요.</Info>
      <Time>{nowTime}</Time>
      <Lists>
        <AdminListBox title="식당 목록">
          <div>
            {resList.map((item, index) => (
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
              waitingList.map((item, index) => (
                <Item key={item.id} id={index} onClick={selectWaiting}>
                  {item.leader}
                </Item>
              ))
            )}
          </>
        </AdminListBox>
        <AdminListBox title="대기열 인원">
          <>
            {memberList.length === 0 ? (
              <NoneText>목록이 없습니다.</NoneText>
            ) : (
              memberList.map((item, index) => (
                <MemberItem>
                  <p key={item.index}>{item.username}</p>
                  <Tag step={item.vaccine_step} />
                </MemberItem>
              ))
            )}
          </>
        </AdminListBox>
      </Lists>
    </>
  );
};

HostContents.propTypes = {
  userName: propTypes.string.isRequired,
  nowTime: propTypes.string,
  resList: propTypes.array,
};

HostContents.defaultProps = {
  nowTime: 'none',
  resList: [],
};

export default HostContents;
