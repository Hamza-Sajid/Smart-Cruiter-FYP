import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ isSignedIn, children }) {
  console.log(isSignedIn);
  if (isSignedIn == null) {
    return <Navigate to="/" />;
  }
  return children;
}

export default ProtectedRoute;
