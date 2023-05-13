import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./auth.css";
import Alert from "../components/Alert/Alert";

const Signup = () => {
  const navigate = useNavigate();
  const [showAlert, setShowAlert] = useState({});
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const onChangeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const signupHandler = async () => {
    try {
      await axios
        .post(`${process.env.REACT_APP_BACKEND_URL}/api/user/signup`, data)
        .then((res) => {
          localStorage.setItem("token", res.data.token);
          navigate(-1);
        })
        .catch((error) => {
          console.log(error.response.data);
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
  }, [showAlert.error]);
  return (
    <div className="auth-page">
      <div className="login-div">
        <h2>Create Account</h2>
        <input placeholder="User Name" name="name" onChange={onChangeHandler} />
        <input
          name="email"
          type="email"
          className="user"
          placeholder="example@example.com"
          required
          onChange={onChangeHandler}
        />
        <input
          name="password"
          type="password"
          className="pwd"
          placeholder="Password"
          required
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
          onChange={onChangeHandler}
        />
        <input
          name="confirmPassword"
          type="password"
          className="pwd"
          placeholder="Confirm Password"
          required
          onChange={onChangeHandler}
        />

        <button onClick={signupHandler}>Sign Up</button>
        <div className="lower-login">
          <p className="psg">Already have an account?</p>&nbsp;
          <Link to="/login">
            <p className="sign-up">Sign in</p>
          </Link>
        </div>
      </div>
      {showAlert.error ? <Alert props={showAlert} /> : ""}
    </div>
  );
};

export default Signup;
