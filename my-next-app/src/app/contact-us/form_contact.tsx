"use client";
import axios from "axios";
import { Sign_up } from "@/interfaces/contact";
import { SubmitHandler, useForm } from "react-hook-form";
import Image from "next/image";
import Bar_header from "@/component/layout/bar_header";
import Footer from "@/component/layout/footer";
import { useState } from "react";
import contact from "/next_js/my-next-app/public/images/contact-us.png";
import { useFormState } from "react-dom";
import { useRouter } from "next/navigation";

function Form_Login() {
  const router = useRouter();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<Sign_up>();

  const [create, setCreate] = useState({});

  // const log_in = async () => {
  //   try {
  //     const con = await axios.post(
  //       "http://localhost:3000/check_sign_in",
  //       create,
  //     );
  //     setCreate(con.data);
  //     if (con.data !== 1) {
  //       alert("Log in successfully");
  //     } else {
  //       console.log("check logIn ", con.data);
  //       // alert("Log in failed");
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  const onChange = (e) => {
    setCreate({ ...create, [e.target.name]: e.target.value });
  };
  const onSubmit: SubmitHandler<Sign_up> = (data) => {
    console.log(data);
    // log_in();
    router.push('/')
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
              {...register("users",{required: true})}
              className="w-96 rounded-lg border-2 p-1  "
              placeholder="Type here"
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
                required: true,
                pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
              })}
              className="w-96 rounded-lg border-2 p-1"
              placeholder="Type here"
              onChange={onChange}
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
            />
          </label>
          {errors.pass && errors.pass.type === "maxLength" && (
            <p className="text-red-500">
              Maximum length 20 characters 
            </p>
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

export default Form_Login;
