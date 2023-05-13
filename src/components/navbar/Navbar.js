import React, { useState } from "react";
import "./Navbar.css";
import { useEffect } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const [token, setToken] = useState(localStorage.getItem("token"));
  const logoutHandler = () => {
    localStorage.removeItem("token");
    setToken(null);
    navigate("/login");
  };
  useEffect(() => {
    if (token) {
      setToken(token);
    }
  }, [token]);

  return (
    <div className="Nav">
      <div className="nav">
        <div className="nav-title">
          <h2>E-Commerce</h2>
          <h3>
            <Link to="/" className="nav-home">
              Home
            </Link>
          </h3>
        </div>
        <div className="nav-right">
          <Link to={localStorage.getItem("token") ? "/cart" : "/login"}>
            <FaShoppingCart
              size="1.75rem"
              color="white"
              style={{ cursor: "pointer" }}
            />
          </Link>
          {token ? (
            <h2 onClick={logoutHandler}>Logout</h2>
          ) : (
            <Link to="/login">
              <h2>Login</h2>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
