import React from "react";
import styled from "styled-components";
import Colors from "../../Assets/Colors/Colors";

const Input = styled.input`
  font-family: "Pretendard-Bold";
  border: 2px solid ${Colors.black};
`;

const InputName = styled.span`
  font-family: "Pretendard-Regular";
`;

const Inputs = () => {
  return (
    <>
      <InputName>이름</InputName>
      <Input placeholder="안녕" />
    </>
  );
};

export default Inputs;
