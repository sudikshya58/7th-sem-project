import React from "react";
import { Route, Navigate } from "react-router-dom";

const PrivateRoute = ({ element }) => {
  // Add your authentication logic here
  const isLoggedIn = localStorage.getItem('token') !== null; // Placeholder for the actual authentication check
  return isLoggedIn ? element : <Navigate to="/logins" />;
};

export default PrivateRoute;
