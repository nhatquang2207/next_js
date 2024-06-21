import React from "react";
import FormLogin from "./FormLogin";
import Footer from "@/component/layout/footer";
import HeaderBar from "@/component/layout/HeaderBar";
export default function Page({ }) {
  return (
    <div>
      <HeaderBar />
      <FormLogin />
      <Footer />
    </div>
  );
}
