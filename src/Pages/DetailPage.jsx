import React from 'react';
import Detail from '../Layouts/Detail/Detail';

const DetailPage = () => {
  return (
    <div>
      <Detail
        restaurantName="맥도날드 천안두정 DT점"
        waiting={7}
        address="충남 천안시 서북구 동서대로 49"
        step={1}
      />
    </div>
  );
};

export default DetailPage;
