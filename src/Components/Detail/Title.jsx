/* eslint-disable react/forbid-prop-types */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Tag from '../Common/Tag';
import Colors from '../../Assets/Colors/Colors';

const Container = styled.div`
  margin-bottom: 40px;
`;

const Restaurant = styled.p`
  & > span:nth-child(1) {
    font-size: 1.5rem;
    font-weight: 700;
    margin-right: 10px;
  }
  & > span:nth-child(2) {
    font-weight: 400;
  }
`;

const WaitingNum = styled.span`
  font-weight: 700;
  color: ${Colors.purple};
`;

const Address = styled.p`
  font-size: 0.9rem;
  font-weight: 200;
  line-height: 40px;
`;

const Title = ({ restaurant, address, waiting, step }) => {
  return (
    <Container>
      <Restaurant>
        <span>{restaurant}</span>
        <span>
          <WaitingNum>{waiting ? waiting.length : 0}</WaitingNum>팀 대기 중
        </span>
      </Restaurant>
      <Address>{address}</Address>
      <Tag step={step} />
    </Container>
  );
};

Title.propTypes = {
  restaurant: PropTypes.string,
  address: PropTypes.string,
  waiting: PropTypes.array,
  step: PropTypes.number,
};

Title.defaultProps = {
  restaurant: '',
  address: '',
  waiting: [],
  step: 0,
};

export default Title;
