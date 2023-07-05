import React from "react";
import { Routes, Route } from "react-router-dom";
import Menu from "./pages/menu/Menu";
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
