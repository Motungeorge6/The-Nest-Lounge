import React from "react";
import Parallex from ""
import "../home/homeStyled.css";

const Home = () => {
  return (
    <div className="container">
      <Parallax strength={600} bgImage={Bar}>
        <div className="content">
          <div className="text-content">Normal Parallax</div>
        </div>
      </Parallax>
    </div>
  );
};

export default Home;
