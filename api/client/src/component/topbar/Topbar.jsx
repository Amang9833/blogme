import './topbar.css';
import { Link } from 'react-router-dom';
import { Context } from '../context/Context';
import { useContext } from 'react';

export default function Topbar() {
  const { user, dispatch } = useContext(Context);
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  }


console.log(user);
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fa-brands fa-facebook"></i>
        <i className="topIcon fa-brands fa-twitter"></i>
        <i className="topIcon fa-brands fa-pinterest"></i>
        <i className="topIcon fa-brands fa-instagram"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topList-item">
            <Link to="/" className="link">
              HOME
            </Link>
          </li>
          <li className="topList-item">
            <Link to="/" className="link">
              ABOUT
            </Link>
          </li>
          <li className="topList-item">
            <Link to="/" className="link">
              CONTACT
            </Link>
          </li>
          <li className="topList-item">
            <Link to="/write" className="link">
              WRITE
            </Link>
          </li>
          <li className="topList-item">
            <Link to="/" className="link" onClick={handleLogout}>
              {user && "LOGOUT"}
            </Link>
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link to='/settings' >
          <img
            className="topImg"
            src={user.profilePic}
            alt=""
            />
            </Link>
        ) : (
          <ul className="topList">
            <li className="topList-item">
              <Link to="/login" className="link">
                LOGIN
              </Link>
            </li>
            <li className="topList-item">
              <Link to="/register" className="link">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}
