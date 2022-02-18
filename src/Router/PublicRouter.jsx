/* eslint-disable react/react-in-jsx-scope */
import { Navigate, Outlet } from 'react-router-dom';
import getToken from '../module/token/tokenHook';

const PublicRouter = () => {
  const user = getToken();
  return !user ? <Navigate to="/" /> : <Outlet />;
};

export default PublicRouter;
