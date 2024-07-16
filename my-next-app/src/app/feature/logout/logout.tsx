"use client";
import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

export default function LogOut() {
const router = useRouter();

  const token = Cookies.get("Token");
  const logOut = async () => {
    try {
      const res = await axios.post("http://localhost:4000/logout",{}, {
        headers: { Authentication: `Bearer ${token}` },
      });
      if(res.status === 200)
        {
          Cookies.remove('Token')
          router.refresh()          
        }
      
    } catch (error) {}

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
