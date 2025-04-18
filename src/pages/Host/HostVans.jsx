import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { getHostVans } from "../../../api";

export function loader() {
  return getHostVans();
}

const HostVans = () => {
  const vans = useLoaderData();

  const hostVansElements = vans.map((van) => (
    <Link to={van.id} key={van.id} className="host-van-link-wrapper">
      <div className="host-van-single" key={van.id}>
        <img src={van.imageUrl} alt={`Photo of ${van.name}`} />
        <div className="host-van-info">
          <h3>{van.name}</h3>
          <p>${van.price}/day</p>
        </div>
      </div>
    </Link>
  ));

  return (
    <section>
      <h1 className="host-vans-title">Your listed vans</h1>
      <div className="host-vans-list">
        <section>{hostVansElements}</section>
      </div>
    </section>
  );
};

export default HostVans;
