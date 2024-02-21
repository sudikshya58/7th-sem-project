import React from "react";
import { Route, Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./authenticate";


const PrivateRoute = () => {
 let loggedIn=false;
 if(loggedIn){
    return <Outlet/>
 }
 else{
    return <Navigate to="login"/>;
 }

 
};

export default PrivateRoute;
