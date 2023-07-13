import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Reserve from "./pages/reserve/Reserve";
import Menu from "./pages/menu/Menu";
import Menucat from "./pages/menu/Menucat";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/menucat" element={<Menucat />} />
        <Route path="/reserve" element={<Reserve />} />
      </Routes>
    </>
  );
};

export default App;
