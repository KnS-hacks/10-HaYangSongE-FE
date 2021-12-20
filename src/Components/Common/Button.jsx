import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Colors from '../../Assets/Colors/Colors';

const Btn = styled.button`
  font-family: 'Pretendard Variable';
  font-size: 1.2rem;
  font-weight: 700;
  border: 2.5px solid ${Colors.main};
  background-color: ${props => props.backgroundcolor};
  color: ${props => props.color};
  width: ${props => props.width};
  height: ${props => props.height};
  cursor: pointer;
  &:hover {
    transition: 0.3s;
    background-color: ${props =>
      props.backgroundcolor === Colors.main ? '#ffffff' : Colors.main};
    color: ${props => (props.color === '#ffffff' ? Colors.main : '#ffffff')};
  }

  &:disabled {
    border: none;
    color: black;
    cursor: not-allowed;
    background-color: #cecece;
  }
`;

const Button = ({
  Width,
  Height,
  Content,
  backgroundColor,
  Color,
  ClickFunc,
  Disabled,
}) => {
  return (
    <Btn
      width={Width}
      height={Height}
      backgroundcolor={backgroundColor}
      color={Color}
      onClick={ClickFunc}
      disabled={Disabled}
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
  ClickFunc: PropTypes.func,
  Disabled: PropTypes.bool,
};

Button.defaultProps = {
  Width: '300px',
  Height: '50px',
  Content: 'None',
  backgroundColor: '#ffffff',
  Color: Colors.main,
  ClickFunc: () => {},
  Disabled: false,
};

export default Button;
