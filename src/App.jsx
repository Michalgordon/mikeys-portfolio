import { Outlet, useLocation } from "react-router-dom";
import { Header, Footer } from "./components";
import { Suspense, useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  const [count, setCount] = useState(0);

  useEffect(() => {
    // execute on location change
    setCount(count + 1);
    console.log("Location changed!", location.pathname);
  }, [location]);

  return (
    <div className="w-full font-poppins flex flex-col h-full bg-white">
      <Header></Header>
      <div className="overflow-auto flex flex-grow">
        <Suspense>
          <AnimatePresence>
            <Outlet></Outlet>
          </AnimatePresence>
        </Suspense>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
