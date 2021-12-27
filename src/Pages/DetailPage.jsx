/* eslint-disable react/forbid-prop-types */
import React from 'react';
// import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import Detail from '../Layouts/Detail/Detail';
import Header2 from '../Components/Common/Header2';
import Sidebar2 from '../Components/Common/Sidebar2';

const DetailPage = () => {
  const { resId } = useParams();
  return (
    <>
      <Sidebar2 />
      <Header2 />
      <Detail resId={resId} />
    </>
  );
};

export default DetailPage;
