import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./auth/Login";
import Signup from "./auth/Signup";
import Navbar from "./components/navbar/Navbar";
import ProductdetailUI from "./components/product/ProductDetailsUI";
import Home from "./components/Home";
import CartUI from "./components/cart/CartUI";
import axios from "axios";
import Footer from "./components/Layout/Footer/Footer";
import Loader from "./components/Layout/Loader/Loader";

const App = () => {
  const [products, setProducts] = useState();
  const getProducts = async () => {
    try {
      await axios
        .get(`${process.env.REACT_APP_BACKEND_URL}/api/products`)
        .then((response) => {
          setProducts(response.data);
        })
        .catch((err) => {
          console.log(err.response.data);
        });
    } catch (error) {
      console.log(error.response.data);
    }
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <main className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            exact
            element={products ? <Home products={products} /> : <Loader />}
          />
          <Route path="/login" exact element={<Login />} />
          <Route path="/signup" exact element={<Signup />} />
          <Route path="/cart" exact element={<CartUI />} />
          <Route
            path="/product/:product_id"
            exact
            element={<ProductdetailUI />}
          />
        </Routes>
        <Footer />
      </Router>
    </main>
  );
};

export default App;
