import React from "react";
import "./Header.css";
import { NavLink, Link } from "react-router-dom";
import avatarIcon from '../../assets/images/avatar-icon.png';

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
          to="host"
          className="header-link"         
        >
          Dashboard
        </NavLink>
        <NavLink to="about" className="header-link">
          About
        </NavLink>
        <NavLink to="vans" className="header-link">
          Vans
        </NavLink>
        <Link to="login" className="login-link">
          <img 
            src={avatarIcon}
            alt=""
            className="login-icon"
          />
        </Link>
      </nav>
    </div>
  );
};

export default Header;
