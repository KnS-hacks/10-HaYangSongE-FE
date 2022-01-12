/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { ReactComponent as Syringe } from '../../Assets/Icons/Syringe.svg';
import Colors from '../../Assets/Colors/Colors';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 78px;
  min-width: 78px;
  height: 35px;
  padding: 2px;
  box-sizing: border-box;
  background-color: ${props => props.bgColor};
  border-radius: 50px;
`;

const Text = styled.p`
  font-size: ${props => props.size};
  font-weight: 700;
  padding: 0 4px;
`;

// 몇차인지 전달하면 그에 맞는 색깔, 크기의 태그를 리턴
const Tag = ({ step }) => {
  const [bgColor, setbgColor] = useState('yellow');
  const checkStep = () => {
    if (step === 1) {
      setbgColor(Colors.Tag_purple);
    } else if (step === 2) {
      setbgColor(Colors.Tag_yellow);
    } else {
      setbgColor(Colors.Tag_normal);
    }
  };
  useEffect(() => {
    checkStep();
  }, [step]);
  return (
    <Container bgColor={bgColor}>
      <Syringe />
      {step ? <Text>{step}차</Text> : <Text size="0.6rem">상관없음</Text>}
    </Container>
  );
};

Tag.propTypes = {
  step: PropTypes.number.isRequired,
};

export default Tag;
