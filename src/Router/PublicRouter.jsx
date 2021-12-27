/* eslint-disable react/react-in-jsx-scope */
import { Navigate, Outlet } from 'react-router-dom';

const PublicRouter = () => {
  const user = JSON.parse(sessionStorage.getItem('user'));
  return !user ? <Navigate to="/" /> : <Outlet />;
};

export default PublicRouter;
