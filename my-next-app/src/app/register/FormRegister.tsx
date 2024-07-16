"use client";
import axios from "axios";
import { SignUp } from "@/interfaces/contact";
import { useForm } from "react-hook-form";
import Image from "next/image";
import React, { useState } from "react";
import contact from "/next_js/my-next-app/public/images/contact-us.png";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function FormRegister() {
  const router = useRouter();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<SignUp>();

  const [form, setForm] = useState({});
  const [notification, setNotification] = useState(true);
  const [textN, setTextN] = useState(true);

  const logIn = async () => {
    try {
      const con = await axios.post("http://localhost:4000/register", form);
      if (con.data.type) {
        alert(con.data.message),
        router.push("/contactUs")
      }else alert(con.data.message); router.refresh()
    } catch (error) {
      console.log(error);
    }
  };
  const onChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const onSubmit = (e: SignUp) => {
    console.log(e);
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
              onChange={onChange}
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
              onChange={onChange}
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
      {!notification && (
        <div>
          <div className="fixed inset-x-40 top-40 flex items-center justify-center">
            <div className="fixed inset-0  bg-gray-950 bg-opacity-40"></div>
            <div className="z-10 rounded-xl  bg-white p-4">
              <div className=" items-center justify-between ">
                {textN ? (
                  <div>
                    <p className="text-2xl font-bold">
                      Users already exist. Please select a new one users
                      <div className="flex justify-end ">
                        <button
                          className=" pr-10 "
                          onClick={() => setNotification(true)}
                        >
                          <Link href=""> Close</Link>
                        </button>
                      </div>
                    </p>
                  </div>
                ) : (
                  <div>
                    <div>
                      <p className="text-2xl font-bold">
                        Register Successfully!
                      </p>
                    </div>
                    <div className="flex justify-end ">
                      <button
                        className=" pr-10 "
                        onClick={() => setNotification(true)}
                      >
                        <Link href=""> Close</Link>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
