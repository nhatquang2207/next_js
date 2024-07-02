"use client";
import React from "react";
import axios from "axios";
import Cookies from "js-cookie";
export default function LogOut() {
  const token = Cookies.get("Token");
  const logOut = async () => {
    try {
      const res = await axios.post("http://localhost:4000/logout",{}, {
        headers: { Authentication: `Bearer ${token}` },
      });
      if(res.status === 200)
        {
          Cookies.remove('Token')
          console.log(res.data.message)
        }
      
    } catch (error) {}

    // if (res.status === 200) {
    //   window.location.href = "/contactUs";
    // } else {
    //   alert("Log out unsuccessful!");
    // }
  };
  return (
    <div className="flex justify-end">
      <button
        className=" rounded-lg bg-blue-500 p-2 text-black "
        onClick={logOut}
      >
        Log Out
      </button>
    </div>
  );
}
