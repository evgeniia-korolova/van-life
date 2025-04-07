import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const HostLayout = () => {
    const activeHostLink = {
        color: '#c40808',
        textDecoration: 'none'
    }
  return (
    <>
      <nav className="host-nav">
        <NavLink
          to="/host"
          end
          style={({ isActive }) => isActive ? activeHostLink : null}
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/host/reviews"
          style={({ isActive }) => isActive ? activeHostLink : null}
        >
          Reviews
        </NavLink>
        <NavLink
          to="/host/income"
          style={({ isActive }) => isActive ? activeHostLink : null}
        >
          Income
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
};

export default HostLayout;
