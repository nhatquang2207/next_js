"use client";
import { Data } from "@/interfaces/contact";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

import { useForm } from "react-hook-form";
export default function Form_add() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Data>();
  const [create, setCreate] = useState({});
  const submitChange = (e) => {
    e.preventDefault();
    setCreate({ ...create, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    console.log(e);
    add();
  };
  const add = async () => {
    try {
      const con = await axios.post("http://localhost:4000/create_info", create);
      setCreate(con.data);
      console.log(con.data);
      alert("Add successfully!");
      router.push("/feature/select");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className="flex items-center justify-center">
        <form action="" className="space-y-2" onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="">Name</label>{" "}
          <input
            {...register("name", { required: true })}
            type="text"
            className="ml-7 rounded-lg border-2 p-1"
            placeholder="Type here"
            onChange={submitChange}
          />
          {errors.name && (
            <p className="text-red-500">Please enter your first name. </p>
          )}
          <br />
          <label htmlFor="">City</label>
          <input
            {...register("city", { required: true })}
            name="city"
            type="text"
            className="ml-12 rounded-lg border-2 p-1"
            placeholder="Type here"
            onChange={submitChange}
          />
          {errors.city && (
            <p className="text-red-500">Please enter your city</p>
          )}
          <br />
          <br />
          <label htmlFor="">Date</label>
          <input
            {...register("date", { required: true })}
            name="date"
            type="date"
            className="ml-10 rounded-lg border-2 p-1"
            placeholder="Type here"
            onChange={submitChange}
          />
          <button className="ml-64 rounded-xl bg-blue-800 p-4 ">Add</button>
        </form>
      </div>
    </div>
  );
}
