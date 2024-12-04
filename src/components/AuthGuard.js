import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { isLoggedIn } from '../utils/auth';

const AuthGuard = ({ children }) => {
  const location = useLocation();
  const isAuth = isLoggedIn();

  const restrictedPaths = ['/', '/register'];
  if (isAuth && restrictedPaths.includes(location.pathname)) {
    return <Navigate to="/home" />;
  }

  return children;
};

export default AuthGuard;
