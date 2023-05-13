import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import Alert from "../components/Alert/Alert";
import "./auth.css";

const Login = () => {
  const navigate = useNavigate();
  const [showAlert, setShowAlert] = useState({});
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const loginHandler = async () => {
    try {
      await axios
        .post(`${process.env.REACT_APP_BACKEND_URL}/api/user/login`, data)
        .then((res) => {
          console.log(res.data.user);
          localStorage.setItem("token", res.data.token);
          navigate(-1);
        })
        .catch((error) => {
          setShowAlert(error.response.data);
        });
    } catch (error) {
      setShowAlert(error.response.data);
    }
  };
  useEffect(() => {
    if (showAlert.error) {
      setTimeout(() => {
        setShowAlert({ error: false, message: "" });
      }, "1200");
    }
    if (localStorage.getItem("token")) {
      navigate(-1);
    }
  }, [showAlert.error, navigate]);
  return (
    <div className="auth-page">
      <div className="login-div">
        <h1>WELCOME!</h1>
        <input
          onChange={(e) => {
            setData({ ...data, [e.target.name]: e.target.value });
          }}
          name="email"
          type="email"
          className="user"
          placeholder="example@example.com"
          required
        />
        <input
          onChange={(e) => {
            setData({ ...data, [e.target.name]: e.target.value });
          }}
          name="password"
          type="password"
          className="pwd"
          placeholder="Password"
          required
        />
        <button onClick={loginHandler}>Log In</button>
        <p>Forgot Password?</p>
        <div className="lower-login">
          <p className="psg">Don't have an account?</p>&nbsp;
          <Link to="/signup">
            <p className="sign-up">Create new one</p>
          </Link>
        </div>
      </div>
      {showAlert.error ? <Alert props={showAlert} /> : ""}
    </div>
  );
};

export default Login;
