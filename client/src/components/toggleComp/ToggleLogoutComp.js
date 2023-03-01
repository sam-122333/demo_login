import React from "react";
import { Link } from "react-router-dom";

const ToggleLogoutComp = () => {
  return (
    <>
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">
            Contact
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/logout">
            logout
          </Link>
        </li>
      </ul>
    </>
  );
};

export default ToggleLogoutComp;
