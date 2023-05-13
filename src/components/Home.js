import React from "react";
import { Link } from "react-router-dom";
import Card from "./Card";
import "./Card.css";

const Home = ({ products }) => {
  return (
    <div className="home">
      {products.map((product) => {
        return (
          <Link to={`/product/${product._id}`} key={product._id}>
            <Card products={product} />
          </Link>
        );
      })}
    </div>
  );
};

export default Home;
