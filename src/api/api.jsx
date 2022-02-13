import Axios from 'axios';

Axios.defaults.baseURL = 'http://52.78.74.152';

const accessToken = JSON.parse(sessionStorage.getItem('persist:root'));

const api = ({
  url,
  type = 'GET',
  param,
  contentType = 'application/json',
}) => {
  const headers = {
    'Content-Type': contentType,
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH',
    'Access-Control-Allow-Headers':
      'Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Authorization',
    token: accessToken,
  };

  if (accessToken !== null) {
    headers.token = JSON.parse(accessToken.user).token;
  }

  return Axios({
    method: type,
    url: `${url}`,
    headers,
    data: param,
  });
};

export default api;
