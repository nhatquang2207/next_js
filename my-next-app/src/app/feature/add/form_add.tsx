"use client";
import { Data } from "@/interfaces/contact";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
export default function Form_add() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Data>();
  const [create, setCreate] = useState({});
  const submitChange = (e) => {
    setCreate({ ...create, [e.target.name]: [e.target.value] });
  };
  const onSubmit = (e) => {
    console.log(e);
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
