import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Title from '../../Components/Detail/Title';
import Content from '../../Components/Detail/Content';

const Container = styled.div`
  padding: 20px;
`;

const Detail = ({ restaurantName, waiting, address, step }) => {
  return (
    <Container>
      <Title
        restaurantName={restaurantName}
        waiting={waiting}
        address={address}
        step={step}
      />
      <Content
        restaurantName={restaurantName}
        waiting={waiting}
        address={address}
        step={step}
      />
    </Container>
  );
};

Detail.propTypes = {
  restaurantName: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  waiting: PropTypes.number.isRequired,
  step: PropTypes.number.isRequired,
};

export default Detail;
