import React from "react";
import Image from "next/image";
import section from "/next_js/my-next-app/public/images/bg-section-1.png";
import qr from "/next_js/my-next-app/public/images/codeQR.png";
import logo from "../../../public/images/logo.png";
export default function Header() {
  return (
    <div className=" ">
      <div className="relative flex items-center justify-center   ">
        <Image
          src={section}
          alt=""
          className=" w-screen max-sm:h-screen max-sm:object-cover  "
          placeholder="blur"
          sizes="100vw"
        />
        <div className="">
          <div className=" absolute left-0 top-[16%] w-screen py-10 text-center text-lg lg:left-[10%] ">
            <div className=" font-serif font-semibold text-yellow-200 lg:text-start  ">
              <p className="w-full lg:text-4xl">
                Grow Through <br /> Connectivity!
              </p>
            </div>
            <div className="">
              <p className="pb-10 pt-4  text-white lg:text-start lg:text-3xl ">
                Connect with your local peer and <br /> business partners in the
                food industry
              </p>
              <div className="flex justify-center lg:justify-start">
                <Image src={qr} alt="" className="flex w-36  " />
              </div>
              <p className=" pt-6  text-yellow-200 lg:text-start lg:text-3xl">
                {" "}
                Download now
              </p>
            </div>
          </div>
          <div></div>
        </div>
      </div>

      <div className="snap-center bg-blue-300  p-1  ">
        <p className="text-center text-sm font-bold text-blue-800 lg:text-3xl ">
          Grow Through Connectivity! Connect with your local peers and business
          partners in the food industry Scan to download Download Now From Farm
          to Fork, Where Your Local Food Community Connects
        </p>
        <div className=" flex w-full snap-y  space-x-4  whitespace-nowrap pt-1  font-bold text-blue-600    ">
          <div className=" ml-10 flex animate-marquee items-center space-x-4 text-sm lg:text-xl ">
            <p className="   rounded-full bg-white p-1 text-center lg:p-4 ">
              Restaurant Owner
            </p>
            <p className="   rounded-full bg-[#CCCC33] p-1 text-center lg:p-4 ">
              Digital Marketing
            </p>
            <p className=" rounded-full  bg-blue-800 p-1 text-center lg:p-4">
              Regulation Expert
            </p>
            <p className=" rounded-full  bg-blue-100 p-1 text-center lg:p-4 ">
              Tax Advisor
            </p>
            <p className=" rounded-full bg-white p-1 lg:p-4 ">Bartender</p>
            <p className=" rounded-full bg-blue-400 p-1  lg:p-4">Cafe Owner</p>
            <p className=" rounded-full   bg-[#CCCC33] p-1 lg:p-4 ">Farmer</p>
            <p className=" rounded-full   bg-blue-800 p-1  lg:p-4">
              Marketing Expert
            </p>
            <p className=" rounded-full  bg-blue-100 p-1 lg:p-4 ">
              Maintenance Service
            </p>
            <p className=" rounded-full   bg-blue-400 p-1 lg:p-4  ">
              Grocery Supplier
            </p>
          </div>
          <div className=" ml-10 flex animate-marquee items-center space-x-4  lg:p-4 ">
            <p className=" rounded-full bg-white p-1 text-center lg:p-4">
              Restaurant Owner
            </p>
            <p className="  rounded-full bg-[#CCCC33] p-1 text-center  lg:p-4 ">
              Digital Marketing
            </p>
            <p className=" rounded-full  bg-blue-800 p-1 text-center  lg:p-4">
              Regulation Expert
            </p>
            <p className=" rounded-full  bg-blue-100 p-1 text-center lg:p-4 ">
              Tax Advisor
            </p>
            <p className=" rounded-full bg-white p-1 lg:p-4 ">Bartender</p>
            <p className=" mx-4  rounded-full  bg-blue-400 p-1 lg:p-4 ">
              Cafe Owner
            </p>
            <p className=" rounded-full bg-[#CCCC33] p-1 lg:p-4 ">Farmer</p>
            <p className=" rounded-full bg-blue-800 p-1 lg:p-4 ">
              Marketing Expert
            </p>
            <p className=" rounded-full bg-blue-100 p-1 lg:p-4 ">
              Maintenance Service
            </p>
            <p className=" rounded-full bg-blue-400 p-1 lg:p-4 ">
              Grocery Supplier
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
