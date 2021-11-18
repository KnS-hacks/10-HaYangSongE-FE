import React from 'react';
import MyReservation from '../Layouts/MyReservation/MyReservation';
import Header2 from '../Components/Common/Header2';
import Sidebar2 from '../Components/Common/Sidebar2';

const MyReservationPage = () => {
  return (
    <>
      <Sidebar2 />
      <Header2 />
      <MyReservation />
    </>
  );
};

export default MyReservationPage;
