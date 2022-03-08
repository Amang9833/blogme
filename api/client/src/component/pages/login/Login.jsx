import { useRef, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import {axiosInstance} from '../../../config'
import "./login.css";

export default function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  const {   dispatch, isFetching } = useContext(Context);


  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: 'LOGIN_START' });
    try {
      const res = await axiosInstance.post('/auth/login', {
        username: userRef.current.value,
        password:passwordRef.current.value
      })
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data } );

    }
    catch (err)
    {
    dispatch({ type: "LOGIN_FAILURE" });

    }
  };
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          className="loginInput"
          type="text"
          placeholder="Enter your username..."
          ref={userRef}
        />
        <label>Password</label>
        <input
          className="loginInput"
          type="text"
          placeholder="Enter your password..."
          ref={passwordRef}
        />
        <button className="loginBtn" type="submit" disabled={isFetching}>
          Login
        </button>
      </form>
      <button className="loginRegisterBtn">
        <Link to="/register" className="link">
          Register
        </Link>
      </button>
    </div>
  );
}
