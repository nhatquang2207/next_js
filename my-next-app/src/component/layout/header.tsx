import React from "react";
import Image from "next/image";
import section from "/next_js/my-next-app/public/images/bg-section-1.png";
import qr from "/next_js/my-next-app/public/images/codeQR.png";

export default function Header() {
  return (
    <div className="snap-center ">
      <div className="relative">
        <Image src={section} alt="" className="h-[80%] lg:w-full " />
        <div className="absolute left-24 top-24 ">
          <div className=" font-serif text-[50px] font-semibold text-yellow-200 md:text-12">
            <p>Grow Through</p>
            <p>Connectivity!</p>
          </div>
          <div>
            <p className="pb-10 pt-4 text-2xl text-white">
              Connect with your local peers and <br /> business partners in the
              food industry
            </p>

            <Image src={qr} alt="" className="w-36" />
            <p className=" pt-6 text-xl text-yellow-200"> Download now</p>
          </div>
        </div>
      </div>
      <div className="bg-blue-300 py-4  ">
        <p className="text-center text-2xl font-bold text-blue-800 ">
          Grow Through Connectivity! Connect with your local peers and business
          partners in the food industry Scan to download Download Now From Farm
          to Fork, Where Your Local Food Community Connects
        </p>
        <div className=" flex w-full snap-y  space-x-4 overflow-x-hidden whitespace-nowrap pt-4 text-xl font-bold text-blue-600    ">
          <div className=" ml-4 flex animate-marquee items-center space-x-4  ">
            <p className="   rounded-full bg-white p-4  py-2 text-center ">
              Restaurant Owner
            </p>
            <p className=" mx-4  rounded-full bg-[#CCCC33] p-4  py-2  text-center ">
              Digital Marketing
            </p>
            <p className=" rounded-full  bg-blue-800 p-4 py-2  text-center">
              Regulation Expert
            </p>
            <p className=" rounded-full  bg-blue-100 p-4 py-2 text-center ">
              Tax Advisor
            </p>
            <p className=" rounded-full bg-white p-4  py-2 ">Bartender</p>
            <p className=" mx-4  rounded-full  bg-blue-400 p-4 py-2 ">
              Cafe Owner
            </p>
            <p className=" rounded-full   bg-[#CCCC33] p-4  py-2 ">Farmer</p>
            <p className=" rounded-full    bg-blue-800 p-4 py-2 ">
              Marketing Expert
            </p>
            <p className=" rounded-full    bg-blue-100 p-4  py-2 ">
              Maintenance Service
            </p>
            <p className=" rounded-full   bg-blue-400 p-4 py-2 ">
              Grocery Supplier
            </p>
          </div>
          <div className=" ml-4 flex animate-marquee items-center space-x-4   ">
            <p className="   rounded-full bg-white p-4  py-2 text-center ">
              Restaurant Owner
            </p>
            <p className=" mx-4  rounded-full bg-[#CCCC33] p-4  py-2  text-center ">
              Digital Marketing
            </p>
            <p className=" rounded-full  bg-blue-800 p-4 py-2  text-center">
              Regulation Expert
            </p>
            <p className=" rounded-full  bg-blue-100 p-4 py-2 text-center ">
              Tax Advisor
            </p>
            <p className=" rounded-full bg-white p-4  py-2 ">Bartender</p>
            <p className=" mx-4  rounded-full  bg-blue-400 p-4 py-2 ">
              Cafe Owner
            </p>
            <p className=" rounded-full   bg-[#CCCC33] p-4  py-2 ">Farmer</p>
            <p className=" rounded-full    bg-blue-800 p-4 py-2 ">
              Marketing Expert
            </p>
            <p className=" rounded-full    bg-blue-100 p-4  py-2 ">
              Maintenance Service
            </p>
            <p className=" rounded-full   bg-blue-400 p-4 py-2 ">
              Grocery Supplier
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
