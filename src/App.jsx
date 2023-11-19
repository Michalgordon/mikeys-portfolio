import { useState } from "react";
import "./App.css";
import { Hero, Header, Footer } from "./components";

function App() {
  return (
    <div className="w-full font-poppins flex flex-col h-full bg-gradient-to-r from-beige to-cream">
      <Header></Header>
      <Hero></Hero>
      <Footer></Footer>
    </div>
  );
}

export default App;
