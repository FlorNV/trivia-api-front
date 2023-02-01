import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { UserContext } from "../context/UserContext";

const PrivateRouter = () => {
  const { currentUser } = useContext(UserContext);

  return currentUser ? (
    <>
      <Navbar />
      <Outlet />
    </>
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRouter;
