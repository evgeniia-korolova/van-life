import React, { Suspense } from "react";
import { Await, defer, Link, useLoaderData } from "react-router-dom";
import { getHostVans } from "../../../api";
import { requireAuth } from "../../../utils";

export async function loader({ request }) {
  await requireAuth(request);
  return defer({ vans: getHostVans() });
}

const HostVans = () => {
  const dataPromise = useLoaderData();

  function renderVanElements(vans) {
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
      <div className="host-vans-list">
        <section>{hostVansElements}</section>
      </div>
    );
  }

  return (
    <section>
      <h1 className="host-vans-title">Your listed vans</h1>
      <Suspense fallback={<h2>Loading vans ...</h2>}>
        <Await resolve={dataPromise.vans}>{renderVanElements}</Await>
      </Suspense>
    </section>
  );
};

export default HostVans;
