import React from 'react';
import styled from 'styled-components';
import Button from './Button';

// 전체 카드바
const CardBar = styled.section`
  display: flex;
  width: 500px;
  height: 200px;
`;

// 맛있는 음식 사진
const FoodImg = styled.img`
  width: 200px;
  height: 200px;
`;

// 가게 간략한 정보
const StoreContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  height: 200px;
`;

// 가게 이름
const StoreTitle = styled.p`
  padding: 10px;
  font-size: 1.5rem;
  font-weight: 700;
`;

// 가게 주소
const StoreAddress = styled.p`
  padding: 10px;
`;

// 백신 태그
const VacTag = styled.div`
  width: 100%;
  height: 30px;
  padding-bottom: 40px;
`;

function Card() {
  return (
    <CardBar>
      <FoodImg />
      <StoreContent>
        <StoreTitle>맥도날드 천안두정 DT점</StoreTitle>
        <StoreAddress>충남 천안시 서북구 동서대로 49</StoreAddress>
        <VacTag>1차</VacTag>
        <Button Content="대기 등록" position="fixed" bottom="0" />
      </StoreContent>
    </CardBar>
  );
}

export default Card;
