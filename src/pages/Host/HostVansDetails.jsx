import React, { useEffect, useState } from "react";
import { useParams, Link, NavLink, Outlet, useLoaderData } from "react-router-dom";
import { getHostVans } from "../../../api";
import { requireAuth } from "../../../utils";


export async function loader({params}) {
  await requireAuth()
  return getHostVans(params.id)
}
const HostVansDetails = () => {
const currentVan = useLoaderData()
  // const [currentVan, setCurrentVan] = useState(null);
  // const params = useParams();
  const activeStyles = {
    color: "red",
  }; 

  return (
    <section>
      <Link to=".." className="back-button" relative="path">
        &larr; <span>Back to all vans</span>
      </Link>
      <div className="host-van-detail-layout-container">
        <div className="host-van-detail">
          <img src={currentVan.imageUrl} width={150} />
          <div className="host-van-detail-info-text">
            <i className={`van-type van-type-${currentVan.type}`}>
              {currentVan.type}
            </i>
            <h3>{currentVan.name}</h3>
            <h4>${currentVan.price}/day</h4>
          </div>
        </div>
        <nav className="host-van-detail-nav">
          <NavLink
            to="."
            end
            style={({ isActive }) => (isActive ? activeStyles : null)}
          >
            Details
          </NavLink>
          <NavLink
            to="pricing"
            style={({ isActive }) => (isActive ? activeStyles : null)}
          >
            Pricing
          </NavLink>
          <NavLink
            to="photos"
            style={({ isActive }) => (isActive ? activeStyles : null)}
          >
            Photos
          </NavLink>
        </nav>
        <Outlet context={{currentVan}} />
      </div>
    </section>
  );
};

export default HostVansDetails;
