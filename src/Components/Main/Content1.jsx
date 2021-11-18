/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Card from '../Common/Card';

const CardDiv = styled.div`
  display: flex;
  overflow-y: auto;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 80%;
`;

const Subtitle = styled.p`
  font-weight: 700;
`;

const Content1 = ({ listData }) => {
  return (
    <>
      <Subtitle>맛집</Subtitle>
      <CardDiv>
        {listData.map(item => (
          <Card
            title={item.name}
            address={item.branch_name}
            step={item.vaccine_condition}
            resId={item.id}
          />
        ))}
      </CardDiv>
    </>
  );
};

Content1.propTypes = {
  listData: PropTypes.any.isRequired,
};

export default Content1;
