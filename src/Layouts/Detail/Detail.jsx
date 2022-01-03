/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-unused-vars */
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

const Detail = ({ resId }) => {
  const [Restaurant, setRestaurant] = useState([]);
  const [ResId, setResId] = useRecoilState(restaurantState);
  const fetch = async () => {
    try {
      const restaurant = await restaurantDetail(resId);
      setRestaurant(restaurant.data);
      setResId(resId);
    } catch (error) {
      return error;
    }
    return Restaurant;
  };

  useEffect(() => {
    fetch();
  }, []);

  useEffect(() => {
    window.Kakao.init(process.env.REACT_APP_KAKAO_KEY);
    console.log(window.Kakao.isInitialized());
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
        <Content
          restaurantName={Restaurant.name}
          menu={Restaurant.menu}
          resId={resId}
        />
      </Container>
    </>
  );
};

Detail.propTypes = {
  resId: PropTypes.any.isRequired,
};

export default Detail;
