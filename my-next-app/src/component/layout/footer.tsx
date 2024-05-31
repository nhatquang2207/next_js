import React from "react";
import Image from "next/image";
const footer = ["Circle", "Directory", "Market", "Business"];
import logo from "/next_js/my-next-app/public/images/logo.png";
export default function Footer() {
  return (
    <div className="snap-end bg-black p-16 text-white ">
      <Image src={logo} width={100} height={100} alt="" className=" w-64 " />
      <div className="flex border-b-2 border-b-yellow-200 pb-10 ">
        <div className="pt-2 font-serif text-xl text-white  ">
          <span>Circle Global, Inc</span>
          <p>12 East 49th Street, 11th Floor</p>
          <p>New York, NY 10017</p>
          <div className="flex space-x-2 pt-2 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 rounded-full bg-blue-500 p-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 rounded-full bg-blue-500 p-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 rounded-full bg-blue-500 p-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
              />
            </svg>
          </div>
        </div>

        <div className=" pl-[250px] ">
          <h3 className=" text-3xl ">Key Features</h3>
          <div className="flex space-x-16">
            {footer.map((item) => (
              <div
                key={item}
                className="  pt-4 text-2xl font-semibold text-yellow-200"
              >
                <a className="" href={`#${item}`}>
                  {" "}
                  {item}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-between pt-6 text-xl">
        <p className="font-semibold-">© All rights reserved 2023</p>
        <div>
          <a href="">Privacy Policy · </a>
          <a href="">Terms & Conditions</a>
        </div>
      </div>
    </div>
  );
}
