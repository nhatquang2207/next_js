import Link from "next/link";
import React from "react";
import Image from "next/image";
import logo from "../../../public/images/logo.png"
function HeaderBar() {
  return (
    <div className="snap-start">
      <div className="fixed z-10 flex min-w-full flex-row items-center justify-between border-b-2 border-b-yellow-300 bg-[rgba(7,39,48,0.8)] p-4 backdrop-blur ">
        <a href="http://localhost:3000/">
          {" "}
          <Image
            src={logo}
            alt="logo"
            priority={true}
            className=" ml-6 flex items-center justify-center w-44 max-sm:w-28 lg:w-44"
          />
        </a>
        <div>
          <Link href="/contact-us"> 
            <button className="mr-10 flex items-center rounded-3xl bg-blue-600 p-2  ">
              <svg
                xmlns="ht tp://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="mr-2 w-8 max-sm:w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>
              <p className="text-12 lg:text-xl">Contact Us</p>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeaderBar;
