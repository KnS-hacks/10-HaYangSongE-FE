import React from 'react';
import styled from 'styled-components';

const Bar = styled.div`
  display: flex;
  flex-direction: row;
  width: auto;
  height: 10%;
  font-family: 'Pretendard Variable';
  font-size: 1.2rem;
  padding: 30px;
  cursor: pointer;
`;

const ContentDiv = styled.div`
  padding-right: 30px;
  &:hover {
    font-weight: 700;
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
