"use client";
import { assets } from "@/Assets/assets";
import Image from "next/image";
import React, { useState } from "react";

const page = () => {
  const [image, setImage] = useState(false);

  return (
    <>
      <form className="pt-5 px-5 sm:pt-12 sm:pl-16">
        <p className="text-xl ">Upload thumbnail</p>
        <label htmlFor="image">
          <Image
            src={!image ? assets.upload_area : URL.createObjectURL(image)}
            width={140}
            alt=""
            height={70}
            className="mt-4"
          />
        </label>
        <input
          onChange={(e) => setImage(e.target.files[0])}
          type="file"
          id="image"
          hidden
          required
        />
        <p className="text-xl mt-4 capitalize">Blog title</p>
        <input
          type="text"
          placeholder="Type here"
          required
          className="w-full sm:w-[500px] mt-4 px-4 py-3 border"
        />
        <p className="text-xl mt-4 capitalize">Blog description</p>
        <textarea
          type="text"
          placeholder="write content here"
          rows={6}
          required
          className="w-full sm:w-[500px] mt-4 px-4 py-3 border"
        />
        <p className="text-xl mt-4 capitalize">Blog category</p>
      </form>
    </>
  );
};

export default page;
