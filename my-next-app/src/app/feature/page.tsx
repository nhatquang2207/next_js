import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div className="h-screen pt-20">
      <ul className="flex flex-rows justify-center space-x-20 ">
        <li>
          <Link href="/feature/add">Add </Link>
        </li>
        <li>
          <Link href="/feature/select"> Select </Link>
        </li>
        <li>
          <Link href="/feature/update">Update </Link>
        </li>
        <li>
          <Link href="/feature/update">Edit </Link>
        </li>
      </ul>
    </div>
  );
}
