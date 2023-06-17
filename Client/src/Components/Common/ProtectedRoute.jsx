import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute() {
  const isLogin = localStorage.getItem("token");
  return isLogin ? <Outlet /> : <Navigate to={"/login"} />;
}

export default ProtectedRoute;
