import React from "react";
import { Data } from "@/interfaces/contact";
export default function Title(data: Data) {
  return (
    <div>
      <div className="h-screen bg-white px-40 ">
        <h1 className="text-center text-3xl ">Danh sach</h1>
        <div className=" grid grid-cols-4 px-10 pt-10 text-red-600 ">
          <h3> Name</h3>
          <h3> City</h3>
          <h3> Date</h3>
        </div>
        <div className="  grid grid-cols-4 px-10 pt-10  ">
          <h3> {data.name}</h3>
          <h3> {data.city}</h3>
          <h3> {new Date(data.date).toLocaleDateString()}</h3>
          <h3 className="space-x-20 ">
            <button className="bg-blue-500 rounded-lg p-1 px-2 "> Edit</button>
            <button className="bg-blue-500 rounded-lg p-1 px-2 "> Delete</button>
          </h3>
        </div>
        <div className=""></div>
      </div>
    </div>
  );
}
