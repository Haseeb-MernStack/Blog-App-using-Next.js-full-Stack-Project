"use client";
import React, { useEffect, useState } from "react";
import BlogItem from "./BlogItem";
import axios from "axios";
import { toast } from "react-toastify";

const BlogList = () => {
  const [menu, setMenu] = useState("All");
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    try {
      const response = await axios.get("/api/blog");
      setBlogs(response.data.blogs);
    } catch (error) {
      toast.error("Error");
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="">
      <div className="flex justify-center gap-6 my-10">
        <button
          onClick={() => setMenu("All")}
          className={
            menu === "All" ? "bg-black text-white py-1 px-4 rounded-sm" : " "
          }
        >
          All
        </button>
        <button
          onClick={() => setMenu("Technology")}
          className={
            menu === "Technology"
              ? "bg-black text-white py-1 px-4 rounded-sm"
              : " "
          }
        >
          Technology
        </button>
        <button
          onClick={() => setMenu("Startup")}
          className={
            menu === "Startup"
              ? "bg-black text-white py-1 px-4 rounded-sm"
              : " "
          }
        >
          Startup
        </button>
        <button
          onClick={() => setMenu("Lifestyle")}
          className={
            menu === "Lifestyle"
              ? "bg-black text-white py-1 px-4 rounded-sm"
              : " "
          }
        >
          Lifestyle
        </button>
      </div>
      <div className="flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24">
        {blogs.filter((item) =>
          menu === "All" ? true : item.category === menu
        ).length === 0 ? (
          <p className="text-center w-full text-gray-500 text-lg">
            No blogs are available
          </p>
        ) : (
          blogs
            .filter((item) => (menu === "All" ? true : item.category === menu))
            .map((item, index) => (
              <BlogItem
                key={index}
                image={item.image}
                title={item.title}
                description={item.description}
                category={item.category}
                id={item._id}
              />
            ))
        )}
      </div>
    </div>
  );
};

export default BlogList;
