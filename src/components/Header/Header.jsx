import React from "react";
import "./Header.css";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
  const activeLink = {
    color: "#161616",
  };

  return (
    <div className="header">
      <Link to="/" className="logo">
        #VanLife
      </Link>
      <nav className="nav">
        <NavLink
          to="/host"
          className="header-link"
          // style={({ isActive }) => isActive ? activeLink : null}
        >
          Dashboard
        </NavLink>
        <NavLink to="/about" className="header-link">
          About
        </NavLink>
        <NavLink to="/vans" className="header-link">
          Vans
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
