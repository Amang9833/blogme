import Header from "../../Header/Header"; 
import {axiosInstance} from '../../../config'
import { useLocation } from "react-router-dom";
import "./home.css";
import { useEffect, useState } from "react";
import Posts from "../../posts/Posts";
import Sidebar from "../../sideBar/Sidebar";

export default function Home() {
  const { search } = useLocation();

  const [post, setPost] = useState([]);
  useEffect(() => {
    const fetchPost = async () => {
      const res = await axiosInstance.get("/post" + search);
      setPost(res.data);
    };
    console.log(search);
    fetchPost();
  }, [search]);
  // console.log(post)
  return (
    <>
      <Header />
      <div className="home">
        <Posts post={post} />
        <Sidebar />
      </div>
    </>
  );
}
