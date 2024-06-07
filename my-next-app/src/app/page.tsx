import HeaderBar from "@/component/layout/HeaderBar";
import Footer from "@/component/layout/Footer";
import Header from "@/component/layout/Header";
import ListMain from "@/component/layout/ListMain";

export default function Home() {
  return (
    <div className="h-screen snap-y snap-mandatory overflow-x-hidden  ">
      <HeaderBar />
      <Header />
      <ListMain />
      <Footer />
    </div>
  );
}
