import React from "react";
import { Data } from "@/interfaces/contact";
import Link from "next/link";
import Del from "@/app/feature/delete/Del";
import { parseISO, format } from "date-fns";
export default function Title(data: Data) {
  return (
    <div>
      <div className="  ">
        <div className=" ml-20  grid grid-cols-4 px-6 pt-10  ">
          <h3> {data.name}</h3>
          <h3> {data.city}</h3>
          <h3>{format(new Date(data.date), "dd-MM-yyyy")} </h3>
          <h3 className="flex space-x-10 ">
            <button className="rounded-lg bg-blue-500 p-2  ">
              <Link href={`/feature/update/${data.personid}`}>Edit</Link>
            </button>
            <Del product={data} />
          </h3>
        </div>
        <div className=""></div>
      </div>
    </div>
  );
}
