/* eslint-disable react/forbid-prop-types */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as People } from '../../Assets/Icons/People.svg';

const Container = styled.div`
  width: 15vw;
  height: auto;
  padding: 20px;
  :hover {
    cursor: pointer;
    transition: 0.3s;
    box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px;
  }
`;

const DistrictName = styled.p`
  font-size: 1.6rem;
  font-weight: 400;
`;

const Percent = styled.p`
  display: flex;
  align-items: center;
  font-size: 1.6rem;
  font-weight: 700;
  padding: 10px 0;

  svg {
    padding-right: 10px;
  }
`;

const District = ({ districtName, percent, Url }) => {
  const navigate = useNavigate();
  const chooseDistrict = () => {
    navigate(`${Url}`);
  };
  return (
    <Container onClick={chooseDistrict}>
      <DistrictName>{districtName}</DistrictName>
      <Percent>
        <People />
        {percent}%
      </Percent>
    </Container>
  );
};

District.propTypes = {
  districtName: PropTypes.string.isRequired,
  percent: PropTypes.any,
  Url: PropTypes.string.isRequired,
};

District.defaultProps = {
  percent: '',
};

export default District;
