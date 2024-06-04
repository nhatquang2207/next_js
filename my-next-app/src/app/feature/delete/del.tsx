"use client";
import { Data } from "@/interfaces/contact";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Del({ product }: { product: Data }) {
  const router = useRouter();

  
  const [modal, setModal] = useState(true);
  const remove = async () => {
    try {
      const response = await axios.delete(
        `http://localhost:4000/delete_info/${product.personid}`,
      );
      router.refresh();
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const check_del = () => {
    setModal(false);
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
        <div className="fixed  inset-x-0 top-24  z-50 flex items-center justify-center">
          <div className="fixed inset-0 bg-black bg-opacity-50"></div>
          <div className="z-50 rounded-lg bg-white p-6 shadow-lg">
            <div className="flex items-center justify-between pb-3">
              <p className="text-2xl font-bold">
                Bạn có chắc muốn xóa người dùng {product.name} này
              </p>
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
