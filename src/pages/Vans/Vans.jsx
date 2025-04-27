import React, { Suspense, useState } from "react";
import {
  Await,
  defer,
  Link,
  useLoaderData,
  useSearchParams,
} from "react-router-dom";
import { getVans } from "../../../api";

export function loader() {
  return defer({ vans: getVans() });
}

const Vans = () => {
  const dataPromise = useLoaderData();

  const [searchParams, setSearchParams] = useSearchParams();  
  const typeFilter = searchParams.get("type");

  // functional way to merge search params
  function handleFilterChange(key, value) {
    setSearchParams((prevParams) => {
      if (value === null) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }
      return prevParams;
    });
  }

  

  function renderVanElements(vans) {
    const displayedVans = typeFilter
      ? vans.filter((van) => van.type === typeFilter)
      : vans;

    const vansElements = displayedVans.map((van) => (
      <div key={van.id} className="van-tile">
        <Link
          to={van.id}
          key={van.id}
          state={{
            search: `?${searchParams.toString()}`,
            type: typeFilter,
          }}
        >
          <div className="van-tile">
            <img src={van.imageUrl} />
            <div className="van-info">
              <h2>{van.name} </h2>
              <h2>
                {van.price} <span>/day</span>{" "}
              </h2>
            </div>
            <i className={`van-type ${van.type} selected`}>{van.type} </i>
          </div>
        </Link>
      </div>
    ));

    return (
      <>
        <div className="van-list-filter-buttons">
          {/* argument=string */}
          <button
            onClick={() => setSearchParams("?type=simple")}
            className={`van-type simple ${
              typeFilter === "simple" ? "selected" : ""
            }`}
          >
            Simple
          </button>

          {/* functional way */}
          <button
            onClick={() => handleFilterChange("type", "luxury")}
            // className="van-type luxury"
            className={`van-type luxury ${
              typeFilter === "luxury" ? "selected" : ""
            }`}
          >
            Luxury
          </button>

          {/* argument = object */}
          <button
            onClick={() => setSearchParams({ type: "rugged" })}
            className={`van-type rugged ${
              typeFilter === "rugged" ? "selected" : ""
            }`}
          >
            Rugged
          </button>
          {typeFilter ? (
            <button
              onClick={() => handleFilterChange("type", null)}
              className="van-type clear-filters"
            >
              Clear Filters
            </button>
          ) : null}
        </div>
        <div className="van-list">{vansElements}</div>
      </>
    );
  }

  return (
    <div className="van-list-container">
      <h1>Explore our van options</h1>
      <Suspense fallback={<h2>Loading vans ...</h2>}>
        <Await resolve={dataPromise.vans}>{renderVanElements}</Await>
      </Suspense>
    </div>
  );
};

export default Vans;
