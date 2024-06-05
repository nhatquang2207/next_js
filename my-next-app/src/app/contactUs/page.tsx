import React from "react";
import FormLogin from "./formLogin";
// import HeaderBar from "@/component/layout/HeaderBar";
import Footer from "@/component/layout/footer";
import HeaderBar from "@/component/layout/headerBar";

export default function page() {
  return (
    <div>
      <HeaderBar />
      <FormLogin />
      <Footer />
    </div>
  );
}
