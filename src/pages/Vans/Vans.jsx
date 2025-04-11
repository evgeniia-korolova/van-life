import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

const Vans = () => {
  const [vans, setVans] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("type");
  console.log(typeFilter);

  useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => {
        setVans(data.vans);
      });
  }, []);

  const displayedVans = typeFilter
    ? vans.filter((van) => van.type === typeFilter)
    : vans;

  const vansElements = displayedVans.map((van) => {
    return (
      <Link to={`/vans/${van.id}`} key={van.id}>
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
    );
  });

  return (
    <div className="van-list-container">
      <h1>Explore our van options</h1>
      <div className="van-list-filter-buttons">
        {/* argument=string */}
        <button
          onClick={() => setSearchParams('?type=simple')}
          className="van-type simple"
        >
          Simple
        </button>
        {/* argument = object */}
        <button
          onClick={() => setSearchParams({ type: "luxury" })}
          className="van-type luxury"
        >
          Luxury
        </button>
        <button
          onClick={() => setSearchParams({ type: "rugged" })}
          className="van-type rugged"
        >
          Rugged
        </button>
        <button
          onClick={() => setSearchParams({})}
          className="van-type clear-filters"
        >
          Clear Filters
        </button>
      </div>
      <div className="van-list">{vansElements}</div>
    </div>
  );
};

export default Vans;
