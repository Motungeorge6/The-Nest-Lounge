import React from "react";
import "./about.css";
import { Parallax } from "react-parallax";
import Bar from "../../assets/bar.jpg";
import Bottles from "../../assets/bottles.jpg";
import Lounge from "../../assets/Lounge.jpg";

const About = () => {
  return (
    <div className="container">
      <Parallax strength={600} bgImage={Bar}>
        <div className="content">
          <div className="text-content">Normal Parallax</div>
        </div>
      </Parallax>

      <div className="content">
        <Parallax strength={300} bgImage={Bottles}>
          <div className="content">
            <div className="text-content">Blur Parallax</div>
          </div>
        </Parallax>
      </div>

      <div className="content">
        <Parallax strength={-600} bgImage={Lounge}>
          <div className="content">
            <div className="text-content">Reverse Parallax</div>
          </div>
        </Parallax>
      </div>
    </div>
  );
};

export default About;
