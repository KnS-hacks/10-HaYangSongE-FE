/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Card from '../Common/Card';
import { ReactComponent as Spoon } from '../../Assets/Icons/Spoon.svg';

const CardDiv = styled.div`
  display: flex;
  overflow-y: auto;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 80%;
`;

const Subtitle = styled.p`
  display: flex;
  align-items: center;
  margin: 30px 0;
  font-weight: 700;
  font-size: 2rem;
`;

const Content2 = ({ listData }) => {
  return (
    <>
      <Subtitle>
        <span>맛집</span>
        <Spoon />
      </Subtitle>
      <CardDiv>
        {listData.map(item => (
          <Card
            key={item.id}
            title={item.name}
            address={item.branch_name}
            step={item.vaccine_condition}
            resId={item.id}
            pic={item.restaurant_photo}
          />
        ))}
      </CardDiv>
    </>
  );
};

Content2.propTypes = {
  listData: PropTypes.any.isRequired,
};

export default Content2;
