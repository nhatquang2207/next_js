import React from "react";
import FormAdd from "./formAdd";

export default function page() {
  return (
    <div className="h-screen pt-10">
      <h1 className="pb-10 text-center text-3xl">Add member </h1>
      <FormAdd />
    </div>
  );
}
