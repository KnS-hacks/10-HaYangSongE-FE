import React from 'react';
import Contents from '../../Components/MyReservation/Contents';

const MyReservation = () => {
  return (
    <Contents
      remainTime={15}
      order={5}
      resName="맥도날드 두정 DT점"
      peopleNum={4}
    />
  );
};

export default MyReservation;
