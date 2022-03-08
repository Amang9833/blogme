import React, { useContext, useEffect, useState } from "react";
import "./singlePage.css";
import axios from "axios";
import { useLocation, Link } from "react-router-dom";
import { Context } from "../context/Context";



export default function SInglePage() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  const PF = "http://localhost:5000/images/";
  const { user } = useContext(Context);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [updateMode, setUpdateMode] = useState(false);

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/post/" + path);
      setPost(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc);
    };
    getPost();
  }, [path]);

  const handleDelete = async () => {
    try {
      await axios.delete(`/post/${post._id}`, {
        data: { username: user.username },
      });
      window.location.replace("/");
    } catch (err) {
      console.log("err" + err);
    }
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`/post/${post._id}`, {
       username: user.username, title , desc ,
      });
      window.location.reload();
    } catch (err) {
      console.log("err" + err);
    }
  }

  return (
    <div className="singlePage">
      <div className="singlePostWrapper">
        {post.photo && (
          <img src={PF + post.photo} alt="" className="singlepostImg" />
        )}
        {updateMode ? (
          <input
            type="text"
            value={title}
            className="singlePageTitleInput"
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : (
          <h1 className="singlePageTitle">
            {post.title}
            {post.username === user?.name && (
              <div className="singlePostEdit">
                <i
                  className="singlePageIcon far fa-edit"
                  onClick={() => setUpdateMode(true)}
                ></i>
                <i
                  class="singlePageIcon fa-regular fa-trash-can"
                  onClick={handleDelete}
                ></i>
              </div>
            )}
          </h1>
        )}
        <div className="singlePageInfo">
          <span className="singlePageAuthor">
            Author :
            <Link to={`/?user=${post.username}`} className="link">
              <b>{post.username}</b>
            </Link>
          </span>
          <span className="singlePageDate">
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>
        {updateMode ? (
          <textarea
            className="singlePageDescInput"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        ) : (
          <p className="singlePageDesc">{post.desc}</p>
        )}
        {
          updateMode && 
        (        <button className="singlePostBtn" onClick={handleUpdate}>Update</button>)
        }
      </div>
    </div>
  );
}
