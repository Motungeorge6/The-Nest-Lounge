import React, { useState } from "react";
import { Parallax } from "react-parallax";
import Bottles from "../../assets/bottles.jpg";
import "./homeStyled.css";
import Logo from "../../assets/Logo.png";
import styles from "./home.module.scss";
import { Button, Text } from "@mantine/core";
import { Navigate, useHistory, useNavigate } from "react-router-dom";
import SideBarButton from "../../component/SideBarButton";
import Footer from "../footer/Footer";
import Lounge from "../../assets/Lounge.jpg";
import TheNest from "../../assets/The-Nest-Lounge.jpg";
import Nest from "../../assets/The nest.jpg";
import Bar from "../../assets/food.jpeg";

const Home = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
  };
  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    navigate("/reserve");
  }

  return (
    <div className="home-container" style={{ margin: "0" }}>
      <SideBarButton />
      <Parallax strength={300} bgImage={TheNest}>
        <div className={styles.container}>
          <div className={styles.navbar}>
            <div className={styles.up}>
              <div className={styles.left}>
                <img src={Logo} alt="logo" style={{ width: "150px" }} />
              </div>
              <div className={styles.right}>
                <a href="/">Home</a>
                <a href="/about">about</a>
                <a href="menu/">Menu</a>
                <a href="reserve/">Book a Table</a>
              </div>
            </div>
            <div className={styles.down}>
              <div className={styles.left}>
                <Text size={"44px"}>Drink, Eat, Enjoy.</Text>
              </div>
              <div className={styles.right}>
                <Text size={"24px"}>The Nest Lounge | Alagomeji</Text>
              </div>
            </div>
          </div>
        </div>
      </Parallax>

      <Parallax strength={300} bgImage={Nest}>
        <div className={styles.container2}>
          <header>
            <Text size={"24px"} mb={20}>
              Make Yourself at Home
            </Text>

            <div>
              <Text size={"44px"}>ENJOY PREMIUM DRAFT BEER, GOOD</Text>
              <Text size={"44px"}>WINES, AND OUR HEARTFUL DISHES</Text>
            </div>
          </header>
          <main>
            <div className={styles.up}>
              <div className={styles.div}>
                <Text w={"100%"} align="left">
                  Welcome to our Lounge!!! <br /> Weather you're planning a
                  casual hangout with friends or a special celebration,our
                  lounge offers the perfect ambiance for a memorable
                  experience.To ensure a seamless experience,we recommend
                  booking a table in advance.
                </Text>
                <Button
                  radius={0}
                  variant="outline"
                  color="dark"
                  size="lg"
                  onClick={handleSubmit}
                >
                  Book a table
                </Button>
              </div>
            </div>
            <div className={styles.down}>
              <div
                className={styles.bar}
                style={{
                  color: "rgb(225, 208, 182)",
                  paddingTop: "5%",
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  flexDirection: "column",
                  paddingLeft: "6%",
                  fontWeight: "lighter",
                }}
              >
                <Text style={{ marginRight: "40%", fontSize: "22px" }}>
                  Hello, Neighbour
                </Text>
                <Text style={{ fontSize: "42px", marginTop: "15px" }}>
                  Happy Hour
                </Text>
                <Text style={{ marginTop: "10px" }}>
                  12PM-3PM Monday-Thursday
                </Text>
              </div>
            </div>
          </main>
        </div>
      </Parallax>
      <Parallax strength={300} bgImage={Bar}>
        <div className={styles.container3}>
          <div className={styles.up}></div>
          <div className={styles.down}></div>
        </div>
      </Parallax>
      <Parallax strength={300} className="reserve-containers">
        <div className="reserve-container">
          <h1>Reserve a Table</h1>
          <p>
            To help us find the best table,select the preferred party
            size,date,time,of your reservation
          </p>
        </div>
        <div className="select-guest">
          <div className="dropdown-container">
            <input
              type="text"
              id="dropdown"
              placeholder="Select Purpose"
              value={selectedOption}
              onChange={handleOptionChange}
              onFocus={toggleDropdown}
              onBlur={toggleDropdown}
              className="dropdown-input"
            />
            <div
              className={`dropdown-icon ${isDropdownOpen ? "open" : ""}`}
              onClick={toggleDropdown}
            >
              &#9662;
            </div>

            {isDropdownOpen && (
              <ul className="dropdown-menu">
                <li onMouseDown={() => handleOptionSelect("1 guest")}>
                  1 guest
                </li>
                <li onMouseDown={() => handleOptionSelect("2 guests")}>
                  2 guests{" "}
                </li>
                <li onMouseDown={() => handleOptionSelect("3 guests")}>
                  3 guests{" "}
                </li>
                <li onMouseDown={() => handleOptionSelect("4 guests")}>
                  4 guests{" "}
                </li>
                <li onMouseDown={() => handleOptionSelect("5 guests")}>
                  5 guests
                </li>
                <li onMouseDown={() => handleOptionSelect("6 guests")}>
                  6 guests
                </li>
              </ul>
            )}
          </div>
          <div className="form-row">
            <input
              type="time"
              placeholder="Time"
              onChange={handleFullNameChange}
            />
            <input
              type="date"
              placeholder="Date"
              id="date"
              name="date"
              onChange={handleEmailChange}
            />
          </div>
          <button
            type="submit"
            className="submit-button"
            onClick={handleSubmit}
          >
            Find A Table
          </button>
        </div>
      </Parallax>
      <Parallax
        strength={300}
        bgImage={Lounge}
        style={{ height: "100vh" }}
      ></Parallax>
      <Footer></Footer>
    </div>
  );
};

export default Home;
