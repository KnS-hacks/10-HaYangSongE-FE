import React from 'react';
import styled from 'styled-components';
import Title from '../../Components/Detail/Title';
import Content from '../../Components/Detail/Content';

const Container = styled.div`
  padding: 20px;
`;

const Detail = () => {
  return (
    <Container>
      <Title
        restaurantName="맥도날드 천안두정 DT점"
        waiting={7}
        address="충남 천안시 서북구 동서대로 49"
        step={1}
      />
      <Content />
    </Container>
  );
};

export default Detail;
