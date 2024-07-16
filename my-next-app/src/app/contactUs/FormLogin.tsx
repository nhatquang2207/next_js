"use client";
import axios from "axios";
import { SignUp } from "@/interfaces/contact";
import { useForm } from "react-hook-form";
import Image from "next/image";
import { useState } from "react";
import contact from "/next_js/my-next-app/public/images/contact-us.png";
import { useRouter } from "next/navigation";


import cookies from "js-cookie";

export default function FormLogin() {
  const router = useRouter();
  const [login, setLogin] = useState({});
  const [token, setToken] = useState();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<SignUp>();

  const logIn = async () => {
    try {
      const con = await axios.post("http://localhost:4000/login", login);
      if (con.data.type) {
        console.log(con)
        cookies.set("Token", con.data?.token);
        setToken(con.data?.token);
        router.push("/feature/select");
      } else {
        alert(con.data.message);
        router.refresh();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };
  const onSubmit = (e: SignUp) => {
    logIn();
  };

  return (
    <div>
      <Image
        src={contact}
        width={800}
        height={800}
        priority={true}
        alt=""
        className="w-full"
      />
      <form
        className=" absolute left-24 top-20 space-y-2 rounded-lg  bg-gray-400 pb-5 pl-10 pt-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="">
          <label htmlFor="" className="mr-4 ">
            Name: <br />
            <input
              {...register("users", { required: true })}
              className="w-96 rounded-lg border-2 p-1  "
              placeholder="Type here"
              onChange={handleChange}
            />{" "}
          </label>
          {errors.users && (
            <p className="text-red-500">Please enter your first name. </p>
          )}
        </div>
        <div>
          <label htmlFor="">
            Email:
            <br />
            <input
              {...register("email", {
                required: false,
                pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
              })}
              className="w-96 rounded-lg border-2 p-1"
              placeholder="Type here"
              onChange={handleChange}
            />
          </label>
          {errors.email && (
            <p className="text-red-500">
              {" "}
              Please enter the correct Email format
            </p>
          )}
        </div>
        <div>
          <label htmlFor="">
            Message:
            <br />
            <textarea
              {...register("pass", { required: true, maxLength: 20 })}
              className="h-40 w-96 rounded-lg border-2 p-1"
              placeholder="Type here"
              onChange={handleChange}
            />
          </label>
          {errors.pass && errors.pass.type === "maxLength" && (
            <p className="text-red-500">Maximum length 20 characters</p>
          )}
        </div>
        <button
          className="w-96 rounded-xl bg-green-500 py-1 text-center"
          type="submit"
        > 
          {" "}
          Send
        </button>
      </form>
    </div>
  );
}
