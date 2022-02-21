/* eslint-disable prefer-destructuring */
/* eslint-disable consistent-return */
const getToken = () => {
  const accessToken = JSON.parse(sessionStorage.getItem('persist:root'));

  if (accessToken !== null) {
    const token = JSON.parse(accessToken.user).token;
    return token;
  }
};

export default getToken;
