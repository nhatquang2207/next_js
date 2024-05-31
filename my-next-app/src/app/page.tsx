import Bar_header from "@/component/layout/bar_header";
import Footer from "@/component/layout/footer";
import Header from "@/component/layout/header";
import List_main from "@/component/layout/list_main";

export default function Home() {
  return (
    <div className="h-screen snap-y snap-mandatory overflow-x-hidden  ">
      <Bar_header />
      <Header />
      <List_main />
      <Footer/>
    </div>
  );
}
