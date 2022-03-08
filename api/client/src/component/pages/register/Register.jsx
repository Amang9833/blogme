import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import "./register.css";
import { axiosInstance } from "../../../config";


const spanStyle = {
  color: "red",
  marginTop: "10px",
};

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false)
    try {
      const res = await axiosInstance.post("/auth/register", {
        username,
        email,
        password,
      });
      console.log(res);
      res.data && window.location.replace('/login');
    }
    catch (err) {
      console.log(err)
      setError(true);
    }
  };

  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          className="registerInput"
          type="text"
          placeholder="Enter your Username..."
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Email</label>
        <input
          className="registerInput"
          type="text"
          placeholder="Enter your email..."
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          className="registerInput"
          type="text"
          placeholder="Enter your password..."
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="registerBtn" type="submit">
          Register
        </button>
      </form>
      <button className="registerRegisterBtn">
        <Link to="/login" className="link">
          {" "}
          Login{" "}
        </Link>
      </button>
      {error && <span style={spanStyle}>ooops! Something went wrong...</span>}
    </div>
  );
}
