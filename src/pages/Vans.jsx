import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Vans = () => {
  const [vans, setVans] = useState([]);

  useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => {
        setVans(data.vans);
        console.log(data);
      });
  }, []);

  console.log(vans);

  const vansElements = vans.map((van) => {
    return (
      <Link to={`/vans/${van.id}`} key={van.id}>
        <div className="van-tile" >
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
      <div className="van-list">{vansElements}</div>
    </div>
  );
};

export default Vans;
