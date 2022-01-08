/* eslint-disable react/forbid-prop-types */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Colors from '../../Assets/Colors/Colors';

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Input = styled.input`
  font-family: 'Pretendard Variable';
  font-size: inherit;
  box-sizing: border-box;
  padding: 8px;
  border: 1.5px solid ${Colors.black};
  width: ${props => props.width};
  height: ${props => props.height};
  &::placeholder {
    font-family: 'Pretendard Variable';
    font-weight: 300;
  }
`;

const InputName = styled.span`
  font-weight: 700;
  font-size: 1.2rem;
  display: inline-block;
  width: 140px;
`;

const Inputs = ({
  inputType,
  inputWidth,
  inputHeight,
  inputContent,
  inputPlaceholder,
  inputChange,
  inputName,
  inputValue,
}) => {
  return (
    <>
      <Container>
        <InputName>{inputContent}</InputName>
        <Input
          name={inputName}
          type={inputType}
          width={inputWidth}
          height={inputHeight}
          placeholder={inputPlaceholder}
          onChange={inputChange}
          value={inputValue}
        />
      </Container>
    </>
  );
};

Inputs.propTypes = {
  inputName: PropTypes.string.isRequired,
  inputType: PropTypes.string,
  inputWidth: PropTypes.string,
  inputHeight: PropTypes.string,
  inputContent: PropTypes.string,
  inputPlaceholder: PropTypes.string,
  inputChange: PropTypes.func.isRequired,
  inputValue: PropTypes.any,
};

Inputs.defaultProps = {
  inputType: 'text',
  inputWidth: '450px',
  inputHeight: '45px',
  inputContent: 'None',
  inputPlaceholder: 'None',
  inputValue: '',
};

export default Inputs;

const InputNumber = styled.input`
  font-family: 'Pretendard Variable';
  font-size: inherit;
  box-sizing: border-box;
  padding: 8px;
  margin-right: 10px;
  border: 1.5px solid ${Colors.black};
  width: 70px;
  height: 45px;
  &::placeholder {
    font-family: 'Pretendard Variable';
    font-weight: 300;
  }
`;

const InputText = styled.span`
  font-size: 1.2rem;
  font-weight: 400;
  width: 30px;
`;
// n차 체크하는 input
export const InputNum = ({
  inputContent,
  inputChange,
  inputName,
  inputValue,
}) => {
  return (
    <Container>
      <InputName>{inputContent}</InputName>
      <InputNumber
        onChange={inputChange}
        name={inputName}
        value={inputValue}
        type="number"
        min="0"
        max="2"
      />
      <InputText>차</InputText>
    </Container>
  );
};

InputNum.propTypes = {
  inputContent: PropTypes.string,
  inputChange: PropTypes.func.isRequired,
  inputName: PropTypes.string.isRequired,
  inputValue: PropTypes.number.isRequired,
};

InputNum.defaultProps = {
  inputContent: 'None',
};

const InputLogin = styled.input`
  font-family: 'Pretendard Variable';
  font-size: inherit;
  display: inline-block;
  box-sizing: border-box;
  padding: 8px;
  margin-right: 10px;
  border: none;
  outline: none;
  height: 45px;
  width: 100%;
  &::placeholder {
    font-family: 'Pretendard Variable';
    font-weight: 300;
  }
`;

// 아이콘 포함 input
export const LoginInput = ({
  inputType,
  inputWidth,
  inputHeight,
  inputPlaceholder,
  inputChange,
  inputEnter,
  inputName,
  inputValue,
}) => {
  return (
    <InputLogin
      type={inputType}
      width={inputWidth}
      height={inputHeight}
      placeholder={inputPlaceholder}
      onChange={inputChange}
      onKeyUp={inputEnter}
      name={inputName}
      value={inputValue}
    />
  );
};

LoginInput.propTypes = {
  inputType: PropTypes.string,
  inputWidth: PropTypes.string,
  inputHeight: PropTypes.string,
  inputPlaceholder: PropTypes.string,
  inputChange: PropTypes.any.isRequired,
  inputEnter: PropTypes.func,
  inputName: PropTypes.string.isRequired,
  inputValue: PropTypes.any,
};

LoginInput.defaultProps = {
  inputType: 'text',
  inputWidth: '100%',
  inputHeight: '45px',
  inputPlaceholder: 'None',
  inputValue: '',
  inputEnter: () => {},
};
