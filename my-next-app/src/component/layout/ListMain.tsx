import React from "react";
import { list_data } from "@/interfaces/list_info";
const datas: list_data[] = [
  {
    id: "circle",
    video: "/videos/video_1.mp4",
    icon: (
      <svg
        xmlns="ht tp://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="mr-2 h-8 w-8 "
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
        />
      </svg>
    ),
    title: "Circle",
    name: " Connect with Your Local  Business Community ",
    describe1:
      " Whether you are a restaurateur, a chef, or a local supplier, this is your space to collaborate, share insights, and stay abreast of industry happenings",
    describe2:
      " From connecting with your neighborhood peers to seeking advice and finding collaboration opportunities, Circle is more than just a forum - create and join your own groups!",
    bg: "bg-green-700",
    text: "text-white",
    style: "flex items-center",
  },
  {
    id: "Directory",

    video: "/videos/video_1.mp4",
    icon: (
      <svg
        xmlns="ht tp://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="mr-2 h-8 w-8 "
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
        />
      </svg>
    ),
    title: "Directory",
    name: "Find Local. Discover More.",
    describe1:
      " Seeking the freshest local ingredients to add a splash of unique flavor to your menu? On the hunt for a reliable new supplier? Or looking for a solid handyman?",
    describe2:
      " Our Directory is your gateway to trusted local businesses, where you can find and partner with vetted vendors",
    bg: "bg-white",
    text: "text-black",
    style: "flex flex-row-reverse items-center",
  },
  {
    id: "Market",

    video: "/videos/video_1.mp4",
    icon: (
      <svg
        xmlns="ht tp://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="mr-2 h-8 w-8 "
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
        />
      </svg>
    ),
    title: "Market",
    name: "Trade Means More than Savings",
    describe1:
      " Is your storage brimming with kitchen gadgets that are no longer in use? Or maybe you're on the lookout for a quick replacement?",
    describe2:
      "  Buy, sell, or give away items with your neighbors in the business community",
    bg: "bg-green-700",
    text: "text-white",
    style: "flex items-center",
  },
  {
    video: "/videos/video_1.mp4",
    icon: (
      <svg
        xmlns="ht tp://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="mr-2 h-8 w-8 "
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
        />
      </svg>
    ),
    id: "Insights",

    title: "Insights",
    name: "Empower Your Growth with Actionable Peer Insights",
    describe1:
      " Curious about the latest culinary trends? Wondering how your venue stacks up against the competition?",
    describe2:
      " Dive into the latest trends and industry news, compare your performance with local peers to unlock opportunities for growth",
    bg: "bg-white",
    text: "text-black",
    style: "flex flex-row-reverse items-center",
  },
  {
    video: "/videos/video_1.mp4",
    icon: (
      <svg
        xmlns="ht tp://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="mr-2 h-8 w-8 "
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
        />
      </svg>
    ),
    id: "Business",
    title: "Business",
    name: "Discover the Next Chapter in Your Business Journey",
    describe1:
      " Explore local business listings available for sale, or list your own venture to advance to your next journey",
    describe2:
      "  Whether you're eyeing expansion or considering selling your business, Circle connects you to a network of potential buyers or sellers",
    bg: "bg-green-700 ",
    text: "text-white",
    style: "flex items-center",
  },
  {
    video: "/videos/video_1.mp4",
    icon: (
      <svg
        xmlns="ht tp://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="mr-2 h-8 w-8 "
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
        />
      </svg>
    ),
    id: "Chat",

    title: "Chat",
    name: "Seamless Collaboration",
    describe1:
      " Say goodbye to the clutter of email threads! Engage in instant messaging tailored to your business's pulse",
    describe2:
      " Communicate with your team instantly, place or receive last-minute grocery orders, and engage with your groups in the neighborhood, all at your fingertips",
    bg: "bg-white",
    text: "text-black",
    style: "flex flex-row-reverse items-center",
  },
];
function List_main() {
  return (
    <div className="">
      {datas.map((item) => (
        <div
          key={item.id}
          id={item.title}
          className={`${item.bg} snap-end lg:${item.style} lg:min-h-screen`}
        >
          <video
            autoPlay
            loop
            muted
            className="flex h-72 w-full items-center justify-center pt-20  lg:pt-2"
          >
            <source src={item.video} type="" />
          </video>
          <div className="pl-12  ">
            <span className="flex items-center text-xl  font-medium text-[#24babf] lg:text-4xl ">
              {item.icon}
              {item.title}
            </span>
            <h2 className=" text-lg font-semibold text-yellow-200 lg:text-3xl ">
              {item.name}
            </h2>
            <ul className={`${item.text}  list-disc  pl-7  text-sm lg:text-3xl`}>
              <li className="">{item.describe1}</li>
              <li className="">{item.describe2}</li>
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

export default List_main;
