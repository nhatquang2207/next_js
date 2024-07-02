"use client";
import { Data } from "@/interfaces/contact";
import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import cookies from "js-cookie";
type Props = {
  params: { id: string };
};
export default function Page({ params }: Props) {
  const token = cookies.get("Token");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Data>();
  const [edit, setEdit] = useState({});
  const submitChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEdit({ ...edit, [e.target.name]: e.target.value });
  };
  const onSubmit = (data: Data) => {
    console.log(data);
    update();
  };
  const router = useRouter();
  const update = async () => {
    try {
      const con = await axios.put(
        `http://localhost:4000/update_info/${params.id}`,
        edit,
        { headers: {Authentication: `Bearer ${token}`}},
      );
      console.log(con.data);
      //  alert("Updated Successfully! ")

      router.push("/feature/select");
      router.refresh();
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
          <button className="ml-64 rounded-xl bg-blue-800 p-4  ">Update</button>
        </form>
      </div>
    </div>
  );
}
