import React from 'react';
import styled from 'styled-components';
import Colors from '../../Assets/Colors/Colors';

// 전체 헤더바
const Bar = styled.header`
  position: fixed;
  left: 150px;
  z-index: 3;
  top: 0;
  /* width: 100vw; */
  height: 80px;
  font-size: 1.5rem;
`;

// 헤더 안 아이템
const ContentDiv = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  font-weight: 400;
`;

// 아이템 내용
const Content = styled.p`
  padding-right: 10px;
  margin: 10px;
  &:hover {
    cursor: pointer;
    transition: 0.1s;
    font-weight: 700; // 마우스 올렸을 때 Bold
    border-bottom: 5px solid ${Colors.main}; // 밑줄
  }
  :last-child {
    padding-right: 0px;
  }
`;

function Headerbar() {
  return (
    <Bar>
      <ContentDiv>
        <Content>서북구</Content>
        <Content>동남구</Content>
      </ContentDiv>
    </Bar>
  );
}

export default Headerbar;
