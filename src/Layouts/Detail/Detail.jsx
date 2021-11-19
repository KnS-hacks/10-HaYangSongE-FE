/* eslint-disable no-unused-vars */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Title from '../../Components/Detail/Title';
import Content from '../../Components/Detail/Content';
import { restaurantDetail } from '../../api/Restaurant';
import { restaurantState } from '../../Recoil/Reservation';

const Container = styled.div`
  height: 100vh;
  overflow-y: auto;
`;

const Detail = ({ match }) => {
  const [Restaurant, setRestaurant] = useState([]);
  const [ResId, setResId] = useRecoilState(restaurantState);
  const { resId } = match.params;
  const fetch = async () => {
    try {
      const restaurant = await restaurantDetail(resId);
      setRestaurant(restaurant.data);
      setResId(match.params.resId);
      console.log(ResId);
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
          waiting={Restaurant.waitings}
          step={Restaurant.vaccine_condition}
        />
        <Content menu={Restaurant.menu} match={match} />
      </Container>
    </>
  );
};

Detail.propTypes = {
  match: PropTypes.any.isRequired,
};

export default Detail;
