import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Button from './Button';
import Tag from './Tag';
import StyledLink from './StyledLink';
import Logo from '../../Assets/Icons/Logo.svg';
// card Box
const CardBox = styled.div`
  display: flex;
  justify-content: space-around;
  width: 700px;
  height: 220px;
  padding: 10px;
  margin-bottom: 30px;
  box-sizing: border-box;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  width: 300px;
  // 가게 이름
  & > p:nth-child(1) {
    font-size: 1.6rem;
    font-weight: 700;
    line-height: 45px;
    padding-right: 10px;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;

// 맛있는 음식 사진
const FoodImg = styled.img`
  width: 250px;
  height: 200px;
`;

// 가게 간략한 정보
const StoreContent = styled.div`
  height: 100%;
`;

const Info = styled.div`
  height: 75%;

  // 가게 주소
  & > p:nth-child(2) {
    font-size: 1rem;
    padding-bottom: 10px;
    width: 300px;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;

function Card({ title, address, step, resId, pic }) {
  return (
    <CardBox>
      {pic ? (
        <FoodImg src={pic} alt="사진이 없습니다." />
      ) : (
        <FoodImg src={Logo} alt="사진이 없습니다." />
      )}
      <StoreContent>
        <Info>
          <Title>
            <p>{title}</p>
            <Tag step={step} />
          </Title>
          <p>{address}</p>
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
  pic: PropTypes.string,
};

Card.defaultProps = {
  step: 0,
  pic: '사진이 없습니다.',
};

export default Card;
