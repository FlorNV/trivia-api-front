import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const PublicRouter = () => {
  const { currentUser } = useContext(UserContext);

  return !currentUser ? <Outlet /> : <Navigate to="/" />;
};

export default PublicRouter;
