import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";
import ProductDetail from "./ProductDetails";
import Loader from "../Layout/Loader/Loader";

const ProductdetailUI = () => {
  const { product_id } = useParams();
  const [product, setProduct] = useState();

  const getDetails = async () => {
    try {
      await axios
        .get(`${process.env.REACT_APP_BACKEND_URL}/api/products/${product_id}`)
        .then((response) => {
          setProduct(response.data.product);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDetails();
  }, []);
  return product ? <ProductDetail product={product} /> : <Loader />;
};

export default ProductdetailUI;
