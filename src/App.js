import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
const App = () => {
  return (
    <Menu />
    // <Routes>
    //   <Route path="/" element={<Home />} />
    //   <Route path="/" element={<About />} />
    // </Routes>
  );
};

export default App;
