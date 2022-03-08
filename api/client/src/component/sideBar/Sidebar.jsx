import { axiosInstance } from "../../../config";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./sidebar.css";

export default function Sidebar() {
  const [cat, setCat] = useState([]);
  useEffect(() => {
    const getCat = async () => {
      const res = await axiosInstance.get("/categories");
      setCat(res.data);
    };
    // console.log(cat)
    getCat();
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <p className="sidebarTitle">About Me</p>
        <img
          src="https://rosebudflowers.flowermanager.net/wp-content/uploads/sites/81/2015/10/mood-blog1.jpg"
          height={"300px"}
          width={"250px"}
          alt="hii"
        />
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae minus
          in sapiente dolorum inventore aliquid maiores temporibus, maxime sit
          cupiditate.
        </p>
        <div className="sidebarTitle">
          <span className="sidebarTitle">CATEGORIES</span>
          <ul className="sidebarList">
            {cat.map((p) => (
              <Link className="link" to={`/?cat=${p.name}`}>
                <li className="sidebarListItem">{p.name}</li>
              </Link>
            ))}
          </ul>
        </div>
        <div className="sidebarItem">
          <span className="sidebarTitle">FOLLOW US</span>
          <div className="sidebarSocial">
            <i className="sidebarIcon fa-brands fa-facebook"></i>
            <i className="sidebarIcon fa-brands fa-twitter"></i>
            <i className="sidebarIcon fa-brands fa-pinterest"></i>
            <i className="sidebarIcon fa-brands fa-instagram"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
