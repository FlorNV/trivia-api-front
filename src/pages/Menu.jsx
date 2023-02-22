import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FiPlay, FiSettings, FiLogOut } from "react-icons/fi";
import { UserContext } from "../context/UserContext";

const Menu = () => {
  const { setCurrentUser } = useContext(UserContext);

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem("currentUser");
  };

  return (
    <div className="menu-container flex">
      <h1 className="title">Trivia API</h1>
      <Link
        className="menu-link btn-green btn-play icon-container"
        to="/categories"
      >
        <FiPlay className="icon" />
        Play
      </Link>
      <Link className="menu-link btn-cyan icon-container" to="/settings">
        <FiSettings className="icon" />
        Settings
      </Link>
      <span
        className="menu-link btn-pink icon-container"
        onClick={handleLogout}
      >
        <FiLogOut className="icon" />
        Logout
      </span>
    </div>
  );
};

export default Menu;
