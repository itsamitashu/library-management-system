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
      alert(error.response.data.message);
    }
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>Login Page</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          onChange={handleChange}
          required
        />

        <br /><br />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          onChange={handleChange}
          required
        />

        <br /><br />

        <button type="submit">Login</button>
      </form>

      <br />

      <p>
        New User? <Link to="/register">Register Here</Link>
      </p>
    </div>
  );
}

export default Login;