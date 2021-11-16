import React from 'react';
import styled from 'styled-components';
// import Colors from '../../Assets/Colors/Colors';

// 전체 헤더바
const Bar = styled.div`
  display: flex;
  flex-direction: row; // 아이템 가로 배치
  width: auto;
  height: 10%;
  font-family: 'Pretendard Variable';
  font-size: 1.2rem;
  padding: 30px;
  cursor: pointer;
`;

// 헤더 안 아이템
const ContentDiv = styled.div`
  padding-right: 30px; // 아이템 간 간격 30px
  &:hover {
    font-weight: 700; // 마우스 올렸을 때 Bold
  }
`;

function Headerbar() {
  return (
    <Bar>
      <ContentDiv>서북구</ContentDiv>
      <ContentDiv>동남구</ContentDiv>
    </Bar>
  );
}

export default Headerbar;
