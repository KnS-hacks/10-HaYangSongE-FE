import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Colors from "../../Assets/Colors/Colors";

const Btn = styled.button`
  font-size: 1.5rem;
  font-weight: 700;
  border: 2.5px solid ${Colors.main};
  background-color: ${(props) => props.backgroundcolor};
  color: ${(props) => props.color};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  &:hover {
    transition: 0.3s;
    background-color: ${(props) =>
      props.color === Colors.main ? Colors.main : "#ffffff"};
    color: ${(props) => (props.color === "#ffffff" ? Colors.main : "#ffffff")};
  }

  cursor: pointer;
`;

const Button = ({ Width, Height, Content, backgroundColor, Color }) => {
  return (
    <Btn
      width={Width}
      height={Height}
      backgroundcolor={backgroundColor}
      color={Color}
    >
      {Content}
    </Btn>
  );
};

Button.propTypes = {
  Width: PropTypes.string,
  Height: PropTypes.string,
  Content: PropTypes.string,
  backgroundColor: PropTypes.string,
  Color: PropTypes.string,
};

Button.defaultProps = {
  Width: "300px",
  Height: "50px",
  Content: "None",
  backgroundColor: "#ffffff",
  Color: Colors.main,
};

export default Button;
