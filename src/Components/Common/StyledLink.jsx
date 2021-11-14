import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Colors from '../../Assets/Colors/Colors';

const StyleLink = styled(Link)`
  &:visited {
    color: ${props => props.color};
    text-decoration: none;
  }
  &:link {
    color: ${props => props.color};
  }
`;

const StyledLink = ({ Color, Url, children }) => {
  return (
    <StyleLink to={Url} color={Color}>
      {children}
    </StyleLink>
  );
};

StyledLink.propTypes = {
  Url: PropTypes.string.isRequired,
  Color: PropTypes.string,
  children: PropTypes.element.isRequired,
};

StyledLink.defaultProps = {
  Color: Colors.main,
};

export default StyledLink;
