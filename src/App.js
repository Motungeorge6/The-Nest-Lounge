import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Footer from "./pages/footer/Footer";
const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
     
     </Routes>
     <Footer/>
    </>
   
  );
};

export default App;
