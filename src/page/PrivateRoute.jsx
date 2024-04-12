import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

export const PrivateRoute = ({ token }) => {
  return token ? <Outlet /> : <Navigate to="/adminlogin" />;
};

