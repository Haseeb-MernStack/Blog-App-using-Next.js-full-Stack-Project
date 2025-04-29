import React from "react";

const Page = () => {
  const col = 1;
  return (
    <div className="p-5 capitalize">
      <ul className="flex items-center mt-8 gap-x-10 px-10">
        <li className="border px-3 py-2 rounded-md cursor-not-allowed">
          Create
        </li>
        <li className="border px-3 py-2 rounded-md cursor-not-allowed">
          See all blogs
        </li>
        <li className="border px-3 py-2 rounded-md cursor-not-allowed">
          See subscriptions
        </li>
      </ul>
    </div>
  );
};

export default Page;
