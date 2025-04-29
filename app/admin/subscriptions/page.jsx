"use client";
import SubsTableItem from "@/Components/Admin/SubsTableItem";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Page = () => {
  const col = 1;

  const [emails, setEmails] = useState([]);

  const fetchEmails = async () => {
    try {
      const response = await axios.get("/api/email");
      setEmails(response.data.emails);
    } catch (error) {
      toast.error("Error");
    }
  };

  const deleteEmail = async (mongoId) => {
    try {
      const response = await axios.delete("/api/email", {
        params: {
          id: mongoId,
        },
      });
      if (response.data.success) {
        toast.success(response.data.msg);
        fetchEmails();
      } else {
        toast.error("Error");
      }
    } catch (error) {
      toast.error("Error");
    }
  };

  useEffect(() => {
    fetchEmails();
  }, []);

  return (
    <div className="flex-1 pt-5 px-5 sm:pt-12 sm:pl-16">
      <h1 className="capitalize">all subscriptions</h1>
      <div className="relative max-w-[600px] h-[80vh] overflow-x-auto mt-4 border border-gray-400 scrollbar-hide">
        <table className="w-full text-sm text-gray-500">
          <thead className="text-xs text-left text-gray-700 uppercase bg-gray-50">
            <tr>
              <th colSpan={col} className="px-6 py-3">
                Email Subscription
              </th>
              <th colSpan={col} className="px-6 py-3 hidden sm:block">
                Date
              </th>
              <th colSpan={col} className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="">
            {emails.length === 0 ? (
              <tr>
                <td colSpan={3} className="text-center py-6 text-gray-500">
                  No Subscriptions (0)
                </td>
              </tr>
            ) : (
              emails.map((item, index) => (
                <SubsTableItem
                  key={index}
                  mongoId={item._id}
                  email={item.email}
                  date={item.date}
                  deleteEmail={deleteEmail}
                />
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Page;
