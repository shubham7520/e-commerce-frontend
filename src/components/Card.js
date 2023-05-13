import React from "react";
import "./Card.css";

const Card = ({ products }) => {
  return (
    <div className="card">
      <div className="card-icon">
        <img
          src={products.img_url}
          alt="react icon"
          width="60%"
          height="200vh"
          style={{ paddingTop: "10px", paddingBottom: "10px" }}
        />
      </div>
      <div className="details_container">
        <div className="card-detail">
          <b>{products.name}</b>
          <p>{products.model} </p>
        </div>
        <div className="item">
          <b>{products.price}</b>
        </div>
      </div>
    </div>
  );
};

export default Card;
