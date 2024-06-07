import React from "react";
import FormLogin from "./FormLogin";
// import HeaderBar from "@/component/layout/HeaderBar";
import Footer from "@/component/layout/Footer";
import HeaderBar from "@/component/layout/HeaderBar";

export default function page() {
  return (
    <div>
      <HeaderBar />
      <FormLogin />
      <Footer />
    </div>
  );
}
