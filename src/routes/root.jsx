import { Outlet } from "react-router-dom";
import { Header, Footer } from "../components";

export default function Root() {
  return (
    <div className="w-full font-poppins flex flex-col h-full bg-gradient-to-r from-beige to-cream">
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
}
