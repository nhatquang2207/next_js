"use client";
import { Data } from "@/interfaces/contact";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import cookies from "js-cookie";
export default function Del({ product }: { product: Data }) {
  const token = cookies.get("Token");
  const router = useRouter();
  const [modal, setModal] = useState(true);
  const remove = async () => {
    try {
      const response = await axios.delete(
        `http://localhost:4000/delete_info/${product.personid}`,
        {
          headers: { Authentication: `Bearer ${token}` },
        },
      );
      console.log(response)
      alert(response.data.message)
      setModal(true);
      router.refresh()

      
    } catch (error) {
      console.log(error)
    }
  };
  return (
    <div>
      <button
        className="rounded-lg bg-blue-500 p-2  "
        onClick={() => setModal(false)}
      >
        {" "}
        Delete
      </button>

      {!modal && (
        <div className="fixed  inset-x-0 top-24  flex items-center justify-center">
          <div className="fixed inset-0 bg-black bg-opacity-50"></div>
          <div className="z-50 rounded-lg bg-white p-6 shadow-lg">
            <div className="flex items-center justify-between pb-3">
              <div className="text-2xl font-bold">
                Are you sure you want to delete the user
                <p className="text-red-600">{product.name} </p>
              </div>
            </div>
            <div className="flex justify-end space-x-10">
              <button
                className="rounded-lg bg-blue-400 p-2 text-black"
                onClick={remove}
              >
                Continue
              </button>
              <button
                className="rounded-lg bg-blue-400 p-2 text-black"
                onClick={() => setModal(true)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
