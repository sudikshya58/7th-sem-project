import { Outlet, Navigate } from "react-router-dom";

const DashboardPrivateRoutes = () => {
  const isLoggedIn = localStorage.getItem("adminToken") !== null;
  return isLoggedIn ? <Outlet /> : <Navigate to="/adminlogin" />;
};

export default DashboardPrivateRoutes;
