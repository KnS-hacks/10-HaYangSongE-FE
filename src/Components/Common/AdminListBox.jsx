/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import Colors from '../../Assets/Colors/Colors';

const Title = styled.p`
  font-size: 1.6rem;
  font-weight: 700;
  padding: 15px 0;
  text-align: center;
`;

const ListBox = styled.div`
  height: 500px;
  width: 300px;
  border: 3px solid ${Colors.Name_tag};
  border-radius: 10px;
  box-sizing: border-box;
`;

const AdminListBox = ({ title, children }) => {
  return (
    <div>
      <Title>{title}</Title>
      <ListBox>{children}</ListBox>
    </div>
  );
};

AdminListBox.propTypes = {
  title: propTypes.string.isRequired,
  children: propTypes.any.isRequired,
};

export default AdminListBox;
