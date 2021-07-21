import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const PrivateRoute = ({ children, ...rest }) => {
  const { user } = useAuth0();

  const isAuthenticated = () => (user ? children : <Redirect to='/' />);

  return <Route {...rest} render={isAuthenticated}></Route>;
};
export default PrivateRoute;
