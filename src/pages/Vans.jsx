import React, { useEffect, useState } from "react";

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

  /*
  0
: 
description
: 
"The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!"
id
: 
"1"
imageUrl
: 
"https://assets.scrimba.com/advanced-react/react-router/modest-explorer.png"
name
: 
"Modest Explorer"
price
: 
60
type
: 
"simple"

  */

  const vansElements = vans.map((van) => {
    return (
      <div className="van-tile" key={van.id}>
        <img src={van.imageUrl} />
        <div className="van-info">
          <h2>{van.name} </h2>
          <h2>
            {van.price} <span>/day</span>{" "}
          </h2>
        </div>
        <i className={`van-type ${van.type} selected`}>{van.type} </i>
      </div>
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
