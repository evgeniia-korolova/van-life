import React, { useEffect, useState } from "react";
import { useParams, Link, useLocation } from "react-router-dom";

const VanDetails = () => {
  const params = useParams();
  const location = useLocation()
  console.log(location);

  const [van, setVan] = useState([]);

  useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setVan(data.vans));
  }, [params.id]);

  const search = location.state?.search || ''
  
  return (
    <div className="van-detail-container">
      <Link to={`..${search}`} className="back-button" relative="path">
        &larr; <span>Back to all vans</span>
      </Link>

      {van ? (
        <div className="van-detail">
          <img alt={van.name} src={van.imageUrl} />
          <i className={`van-type ${van.type} selected`}>{van.type}</i>
          <h2>{van.name}</h2>
          <p className="van-price">
            <span>${van.price}</span>/day
          </p>
          <p>{van.description}</p>
          <button className="link-button">Rent this van</button>
        </div>
      ) : (
        <h2>Loading ...</h2>
      )}
    </div>
  );
};

export default VanDetails;
