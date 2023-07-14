import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Reserve from "./pages/reserve/Reserve";
import Menu from "./pages/menu/Menu";
import Menucat from "./pages/menu/Menucat";
import Itemslist from "./pages/menu/Itemslist";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/Menucat" element={<Menucat />} />
        <Route path="/reserve" element={<Reserve />} />
        <Route path="/itemslist" element={<Itemslist />} />
      </Routes>
    </>
  );
};

export default App;
