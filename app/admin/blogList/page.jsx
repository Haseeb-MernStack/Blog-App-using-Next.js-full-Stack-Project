"use client";
import BlogTableItem from "@/Components/Admin/BlogTableItem";
import axios from "axios";
import { NextResponse } from "next/server";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Page = () => {
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    try {
      const response = await axios.get("/api/blog");
      setBlogs(response.data.blogs);
    } catch (error) {
      NextResponse(error);
    }
  };

  const deleteBlog = async (mongoId) => {
    const response = await axios.delete("/api/blog", {
      params: {
        id: mongoId,
      },
    });
    toast.success(response.data.msg);
    fetchBlogs();
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="flex-1 pt-5 px-5 sm:pt-12 sm:pl-16">
      <h1>All blogs</h1>
      <div className="relative h-[80vh] max-w-[850px] overflow-x-auto mt-4 border border-gray-400 scrollbar-hide">
        <table className="w-full text-sm text-gray-500 ">
          <thead className="text-sm text-gray-700 text-left uppercase bg-gray-50">
            <tr>
              <th scope="col" className="hidden capitalize sm:block px-6 py-3">
                author name
              </th>
              <th scope="col" className="capitalize px-6 py-3">
                blog title
              </th>
              <th scope="col" className="capitalize px-6 py-3">
                date
              </th>
              <th scope="col" className="capitalize px-6 py-3">
                action
              </th>
            </tr>
          </thead>
          <tbody>
            {blogs.length === 0 ? (
              <tr>
                <td colSpan="4" className="px-6 py-4 text-center">
                  No blogs found
                </td>
              </tr>
            ) : (
              blogs.map((item, index) => {
                return (
                  <BlogTableItem
                    key={index}
                    mongoId={item._id}
                    title={item.title}
                    author={item.author}
                    authorImg={item.authorImg}
                    date={item.date}
                    deleteBlog={deleteBlog}
                  />
                ); // ... existing map code
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Page;
