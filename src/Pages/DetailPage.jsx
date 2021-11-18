/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import Detail from '../Layouts/Detail/Detail';
import Header2 from '../Components/Common/Header2';
import Sidebar2 from '../Components/Common/Sidebar2';

const DetailPage = ({ match }) => {
  return (
    <>
      <Sidebar2 />
      <Header2 />
      <Detail match={match} />
    </>
  );
};

DetailPage.propTypes = {
  match: PropTypes.any.isRequired,
};

export default DetailPage;
