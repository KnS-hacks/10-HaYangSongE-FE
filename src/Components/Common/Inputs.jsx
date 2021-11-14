import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Colors from "../../Assets/Colors/Colors";

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Input = styled.input`
  font-family: "Pretendard Variable";
  font-size: inherit;
  box-sizing: border-box;
  padding: 8px;
  border: 1.5px solid ${Colors.black};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  &::placeholder {
    font-family: "Pretendard Variable";
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
}) => {
  return (
    <>
      <Container>
        <InputName>{inputContent}</InputName>
        <Input
          type={inputType}
          width={inputWidth}
          height={inputHeight}
          placeholder={inputPlaceholder}
        />
      </Container>
    </>
  );
};

Inputs.propTypes = {
  inputType: PropTypes.string,
  inputWidth: PropTypes.string,
  inputHeight: PropTypes.string,
  inputContent: PropTypes.string,
  inputPlaceholder: PropTypes.string,
};

Inputs.defaultProps = {
  inputType: "text",
  inputWidth: "450px",
  inputHeight: "45px",
  inputContent: "None",
  inputPlaceholder: "None",
};

export default Inputs;

const InputNumber = styled.input`
  font-family: "Pretendard Variable";
  font-size: inherit;
  box-sizing: border-box;
  padding: 8px;
  margin-right: 10px;
  border: 1.5px solid ${Colors.black};
  width: 50px;
  height: 45px;
  &::placeholder {
    font-family: "Pretendard Variable";
    font-weight: 300;
  }
`;

const InputText = styled.span`
  font-size: 1.2rem;
  font-weight: 400;
  width: 50px;
`;

export const InputNum = ({ inputContent }) => {
  return (
    <Container>
      <InputName>{inputContent}</InputName>
      <InputNumber type="number" min="0" max="2" />
      <InputText>차</InputText>
    </Container>
  );
};

InputNum.propTypes = {
  inputContent: PropTypes.string,
};

InputNum.defaultProps = {
  inputContent: "None",
};
