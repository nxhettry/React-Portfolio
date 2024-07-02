import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/Navbar/Header";
import Homepage from "./Routes/Homepage";
import Projectpage from "./Routes/Projectpage/Projectpage";
import Aboutpage from "./Routes/Aboutpage/Aboutpage";
import Footer from "./components/Footer/Footer";
import Contactpage from "./Routes/Contactpage/Contactpage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  useEffect(() => {
    console.clear();
  });

  return (
    <div className="relative bg-background h-full text-white font-mainText w-screen overflow-x-hidden">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/projects" element={<Projectpage />} />
          <Route path="/about" element={<Aboutpage />} />
          <Route path="/contact" element={<Contactpage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
