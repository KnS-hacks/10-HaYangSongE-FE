import React from 'react';
import Sidebar from '../../Components/Common/Sidebar2';
import Headerbar from '../../Components/Common/Header2';
import Contents from '../../Components/MyPage/PageModify';

const MyPage = () => {
  return (
    <>
      <Sidebar />
      <Headerbar />
      <Contents
        userName="하양송이"
        userID="qlqlql"
        userNumber="010-1234-5678"
        userStep="1"
        userDate="2021.11.29"
      />
    </>
  );
};

export default MyPage;
