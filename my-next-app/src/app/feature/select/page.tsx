import axios from "axios";
import Title from "@/component/feature/title";
import Link from "next/link";
export default async function Info() {
  const response = await axios.get("http://localhost:4000/");
  const todo = response.data;
  return (
    <div className="h-screen ">
      <div className="">
        <h1 className="text-center text-3xl ">Danh sach</h1>
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
