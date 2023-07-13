import React from "react";
import "./menu.css"
import facebooklogo from "../../assets/facebook-logo.png"
import instagramlogo from "../../assets/instagram.png"
import bell from "../../assets/bell.png"
import logo from "../../assets/Logo.png"
import NavBar from "../../component/NavBar";

const Menu = () =>{
    return (
            <div className="container">
              <NavBar/>
              {/* <div className="top-container">
                <div className="notification-div">
                  <img className="bell" src={bell} alt="notification image" />
                </div>
              </div>
        
              <div className="middle-container">
                <div className="logo-div">
                  <img class="logo" src={logo} alt="logo image" />
                </div>
                <div className="menu-button">
                  <a className="menu-text" href="/Menucat">Menu</a>
                </div>
                <div className="down-cont">
                  <div className="facebook-cont">
                    <img className="facebook" src={facebooklogo} alt="" />
                  </div>
                  <div className="instagram-cont">
                    <img className="instagram" src={instagramlogo} alt="" />
                  </div>
                </div>
              </div> */}
            </div>
          );
}
export default Menu;

