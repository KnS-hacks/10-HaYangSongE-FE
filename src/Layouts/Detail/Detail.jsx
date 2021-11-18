/* eslint-disable react/forbid-prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Title from '../../Components/Detail/Title';
import Content from '../../Components/Detail/Content';
import { restaurantDetail } from '../../api/Restaurant';

const Container = styled.div`
  height: 100vh;
  overflow-y: auto;
`;

const Detail = ({ match }) => {
  const [Restaurant, setRestaurant] = useState([]);
  const { resId } = match.params;
  const fetch = async () => {
    try {
      const restaurant = await restaurantDetail(resId);
      setRestaurant(restaurant.data);
      console.log(restaurant);
    } catch (error) {
      return error;
    }
    return Restaurant;
  };
  useEffect(() => {
    fetch();
  }, []);
  return (
    <>
      <Container>
        <Title
          restaurant={Restaurant.name}
          address={Restaurant.branch_name}
          waiting={Restaurant.waiting}
          step={Restaurant.vaccine_condition}
        />
        <Content />
      </Container>
    </>
  );
};

Detail.propTypes = {
  match: PropTypes.any.isRequired,
};

export default Detail;
