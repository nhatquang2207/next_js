"use client";
import React from "react";
import cookie from "js-cookie";
import { useRouter } from "next/navigation";

export default function LogOut() {
  const router = useRouter();

  const logOut = () => {
    cookie.remove("Token")
    window.location.href = '/contactUs'; //
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
