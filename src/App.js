import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Footer from "./pages/footer/Footer";
// import { Menu } from "@mantine/core";
import Menu from "./pages/menu/Menu";
import Menucat from "./pages/menu/Menucat";

const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Menu" element={<Menu/>}/>
      <Route path="/Menucat" element={<Menucat/>}/>
     </Routes>
     {/* <Footer/> */}
     {/* <Menu/> */}
    </>
   
  );
};

export default App;
