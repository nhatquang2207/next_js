import axios from "axios";
import Title from "@/component/feature/Title";
import Link from "next/link";
import LogOut from "../logout/logout";
import { cookies } from 'next/headers'
export default async function Info() {
  
  
  const cookieStore = cookies()
  const theme = cookieStore.get('Token')?.value
  const response = await axios.get("http://localhost:4000/");
  console.log("Token",theme)
  const todo = response.data;
  return (
    <div className="h-screen ">
      <div className="">
        <h1 className="text-center text-3xl ">Danh sach</h1>
        <LogOut />

        <div className="ml-20 grid grid-cols-4 px-6 pt-10   text-red-600 ">
          <h3> Name</h3>
          <h3> City</h3>
          <h3> Date</h3>
          <h3>
            <button className="rounded-lg bg-blue-500 p-2 text-black  ">
              <Link href="/feature/add">Add product</Link>
            </button>
          </h3>
        </div>
      </div>
      {todo?.map((item) => (
        <div className="" key={item.personid}>
          <Title
            personid={item.personid}
            name={item.name}
            city={item.city}
            date={item.date}
          />
        </div>
      ))}
    </div>
  );
}
