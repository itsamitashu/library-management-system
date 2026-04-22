import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/api/users/login",
        formData
      );

      localStorage.setItem("token", res.data.token);
      alert(res.data.message);
      navigate("/dashboard");

    } catch (error) {
      alert(error.response?.data?.message || "Login Failed");
    }
  };

  return (
    <div style={mainContainer}>
      <div style={box}>
        <h1 style={title}>Login</h1>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            onChange={handleChange}
            required
            style={input}
          />

          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            onChange={handleChange}
            required
            style={input}
          />

          <button type="submit" style={button}>
            Login
          </button>
        </form>

        <p style={text}>
          New User?{" "}
          <Link to="/register" style={link}>
            Register Here
          </Link>
        </p>
      </div>
    </div>
  );
}

const mainContainer = {
  minHeight: "100vh",
  background: "#07122b",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};

const box = {
  background: "#f3f3f3",
  padding: "50px",
  borderRadius: "20px",
  width: "420px",
  textAlign: "center"
};

const title = {
  fontSize: "60px",
  color: "#111827",
  marginBottom: "30px"
};

const input = {
  width: "100%",
  padding: "16px",
  marginBottom: "20px",
  borderRadius: "10px",
  border: "2px solid #ff4d4d",
  fontSize: "18px",
  background: "white"
};

const button = {
  width: "100%",
  padding: "16px",
  background: "#ff1e1e",
  color: "white",
  border: "none",
  borderRadius: "10px",
  fontSize: "20px",
  cursor: "pointer"
};

const text = {
  marginTop: "25px",
  fontSize: "18px",
  color: "#444"
};

const link = {
  color: "#ff1e1e",
  fontWeight: "bold"
};

export default Login;