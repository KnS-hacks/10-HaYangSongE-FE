import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Button from './Button';
import Tag from './Tag';
import StyledLink from './StyledLink';
// card Box
const CardBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 525px;
  height: 200px;
  padding-bottom: 50px;
`;

// 맛있는 음식 사진
const FoodImg = styled.img`
  width: 200px;
  height: 200px;
`;

// 가게 간략한 정보
const StoreContent = styled.div`
  height: 100%;
`;

const Info = styled.div`
  height: 75%;
  // 가게 이름
  & > p:nth-child(1) {
    font-size: 1.6rem;
    font-weight: 700;
    line-height: 45px;
  }
  // 가게 주소
  & > p:nth-child(2) {
    font-size: 1rem;
    padding-bottom: 10px;
  }
`;

function Card({ title, address, step, resId, pic }) {
  return (
    <CardBox>
      <FoodImg src={pic} />
      <StoreContent>
        <Info>
          <p>{title}</p>
          <p>{address}</p>
          <Tag step={step} />
        </Info>
        <StyledLink Url={`detail/${resId}`}>
          <Button Content="대기 등록" Height="50px" width="100%" />
        </StyledLink>
      </StoreContent>
    </CardBox>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  step: PropTypes.number,
  resId: PropTypes.number.isRequired,
  pic: PropTypes.string.isRequired,
};

Card.defaultProps = {
  step: 0,
};

export default Card;
