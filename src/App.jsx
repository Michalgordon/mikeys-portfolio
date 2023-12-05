import { Outlet } from "react-router-dom";
import { Header, Footer } from "./components";
import { Suspense } from "react";

function App() {
  return (
    <div className="w-full font-poppins flex flex-col h-full bg-white">
      <Header></Header>
      <div className="overflow-auto flex flex-grow">
        <Suspense fallback={<div>loading...</div>}>
          <Outlet></Outlet>
        </Suspense>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
