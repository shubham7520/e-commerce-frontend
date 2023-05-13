import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cart from "./Cart";
import axios from "axios";
import Loader from "../Layout/Loader/Loader";
const CartUI = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItem] = useState();
  const getCartItems = async () => {
    try {
      await axios
        .get(
          `${process.env.REACT_APP_BACKEND_URL}/api/products/cart/items`,

          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        )
        .then((response) => {
          setCartItem(response.data.cartItem);
        })
        .catch((error) => {
          console.log(error.response.data);
        });
    } catch (error) {
      console.log(error.response.data);
    }
  };

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    } else {
      getCartItems();
    }
  }, [navigate]);

  return cartItems ? (
    cartItems.map((cartItem) => {
      return <Cart key={cartItem._id} cartItem={cartItem} />;
    })
  ) : (
    <Loader />
  );
};

export default CartUI;
