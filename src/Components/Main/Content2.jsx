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
  width: 80vw;
  margin-top: 4vh;
`;

const Content2 = ({ listData }) => {
  return (
    <>
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
