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
          to="."
          end
          style={({ isActive }) => isActive ? activeHostLink : null}
        >
          Dashboard
        </NavLink>
        <NavLink
          to="income"
          style={({ isActive }) => isActive ? activeHostLink : null}
        >
          Income
        </NavLink>
        <NavLink
          to="vans"
          style={({ isActive }) => isActive ? activeHostLink : null}
        >
          Vans
        </NavLink>
        <NavLink
          to="reviews"
          style={({ isActive }) => isActive ? activeHostLink : null}
        >
          Reviews
        </NavLink>
       
      </nav>
      <Outlet />
    </>
  );
};

export default HostLayout;
