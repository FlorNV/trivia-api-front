import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FiSettings, FiLogOut } from "react-icons/fi";
import { UserContext } from "../context/UserContext";

const Navbar = () => {
  const { setCurrentUser } = useContext(UserContext);

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem("currentUser");
  };

  return (
    <nav className="nav">
      <div className="navbar container">
        <div>
          <Link className="nav-title" to="/">
            Logo
          </Link>
        </div>
        <div className="nav-links">
          <Link className="nav-link" to="/settings">
            <FiSettings className="icon" />
            Settings
          </Link>
          <span className="nav-link" onClick={handleLogout}>
            <FiLogOut className="icon" />
            Logout
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
