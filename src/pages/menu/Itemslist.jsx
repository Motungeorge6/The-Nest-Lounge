import React from "react";
import "./itemslist.css";
import searchicon from "../../assets/search.png";
import favouriteicon from "../../assets/like.png";
import returnicon from "../../assets/back.png";

const Itemslist = () => {
  return (
    <div className="itemscontainer">
      <div className="fixedheader">
        <div className="left-header">
          <div className="return-button">
            <img className="go-back" src={returnicon} alt="return-icon" />
          </div>
        </div>
        <div className="right-header">
          <div className="favourite">
            <img
              className="favourites"
              src={favouriteicon}
              alt="favourite-icon"
            />
          </div>
          <div className="search-bar">
            <img className="search-it" src={searchicon} alt="search-icon" />
          </div>
        </div>
      </div>
      {/* ------------------------------------------------------------------------------------------------------ */}
      <div className="mobile-container">
        {/* --------------------------------------------------------------------------- */}
        <div className="menu-item red-bg">
          <div className="menu-title">
            <a href="#EATS-MENU">EATS MENU</a>
          </div>
        </div>
        <div className="menu-item">
          <div className="menu-title">
            <a href="#DRINKS-MENU">DRINKS MENU</a>
          </div>
        </div>
        <div className="menu-item">
          <div className="menu-title">
            <a href="#SHISHA-MENU">SHISHA MENU</a>
          </div>
        </div>
        <div className="menu-item">
          <div className="menu-title">
            <a href="#MERCHANDISE">MERCHANDISE</a>
          </div>
        </div>
        <div className="menu-item">
          <div className="menu-title">
            <a href="#HAPPY-HOUR">HAPPY HOUR</a>
          </div>
        </div>
      </div>

      {/* ----------------------------------------------------------------------------- */}

      <div className="menu">
        <div className="menu-item2">
          <img
            alt=""
            draggable="false"
            src="https://images.mydigimenu.com/media/ClCan7aQ9k/ClCan7aQ9k-24062019067860723.png?w=250&h=250"
            className="menu-image"
          />
          <div className="menu-title">STARTERS &amp; SHAREABLES</div>
        </div>

        <div className="menu-item2">
          <img
            alt=""
            draggable="false"
            src="https://images.mydigimenu.com/media/ClCan7aQ9k/ClCan7aQ9k-24062019063010327.png?w=250&h=250"
            className="menu-image"
          />
          <div className="menu-title">LEGENDARY® STEAK BURGERS</div>
        </div>

        <div className="menu-item2">
          <img
            alt=""
            draggable="false"
            src="https://images.mydigimenu.com/media/ClCan7aQ9k/ClCan7aQ9k-13092220097280213.jpeg?w=250&h=250"
            className="menu-image"
          />
          <div className="menu-title">SANDWICHES</div>
        </div>

        <div className="menu-item2">
          <img
            alt=""
            draggable="false"
            src="https://images.mydigimenu.com/media/ClCan7aQ9k/ClCan7aQ9k-24062019064780387.png?w=250&h=250"
            className="menu-image"
          />
          <div className="menu-title">SALADS</div>
        </div>

        <div className="menu-item2">
          <img
            alt=""
            draggable="false"
            src="https://images.mydigimenu.com/media/ClCan7aQ9k/ClCan7aQ9k-24062019065940556.png?w=250&h=250"
            className="menu-image"
          />
          <div className="menu-title">SPECIALTY ENTRÉES</div>
        </div>

        <div className="menu-item2">
          <img
            alt=""
            draggable="false"
            src="https://images.mydigimenu.com/media/ClCan7aQ9k/ClCan7aQ9k-24062019060430989.png?w=250&h=250"
            className="menu-image"
          />
          <div className="menu-title">DESSERTS &amp; MILKSHAKES</div>
        </div>
      </div>
      {/* ---------------------------------------------------------------------------------------------------------- */}
      <div className="items-div">
        <div className="items-menu" id="EATS-MENU">
          <div className="items-cat">
            <p className="menu-categories-title">STARTERS &amp; SHAREABLES</p>
            <div className="items-list">
              <img src="" alt="" />
              <p className="item-name">JUMBO COMBO VEG</p>
              <p className="item-price"></p>
              <div className="add-button"></div>
            </div>
            <div className="items-list">
              <img src="" alt="" />
              <p className="item-name">JUMBO COMBO</p>
              <p className="item-price"></p>
              <div className="add-button"></div>
            </div>
            <div className="items-list">
              <img src="" alt="" />
              <p className="item-name">NACHOS</p>
              <p className="item-price"></p>
              <div className="add-button"></div>
            </div>
            <div className="items-list">
              <img src="" alt="" />
              <p className="item-name"></p>
              <p className="item-price"></p>
              <div className="add-button"></div>
            </div>
          </div>
        </div>
        {/* ----------------------------------------------------------------------------------------------------- */}
        <div className="items-div">
          <div className="items-menu" id="DRINKS-MENU">
            <div className="items-cat">
              <p className="menu-categories-title"></p>
              <div className="items-list">
                <img src="" alt="" />
                <p className="item-name"></p>
                <p className="item-price"></p>
                <div className="add-button"></div>
              </div>
              <div className="items-list">
                <img src="" alt="" />
                <p className="item-name"></p>
                <p className="item-price"></p>
                <div className="add-button"></div>
              </div>
              <div className="items-list">
                <img src="" alt="" />
                <p className="item-name"></p>
                <p className="item-price"></p>
                <div className="add-button"></div>
              </div>
              <div className="items-list">
                <img src="" alt="" />
                <p className="item-name"></p>
                <p className="item-price"></p>
                <div className="add-button"></div>
              </div>
            </div>
          </div>
        </div>
        {/* ------------------------------------------------------------------------------------------------------ */}

        <div className="items-div">
          <div className="items-menu" id="SHISHA-MENU">
            <div className="items-cat">
              <p className="menu-categories-title"></p>
              <div className="items-list">
                <img src="" alt="" />
                <p className="item-name"></p>
                <p className="item-price"></p>
                <div className="add-button"></div>
              </div>
              <div className="items-list">
                <img src="" alt="" />
                <p className="item-name"></p>
                <p className="item-price"></p>
                <div className="add-button"></div>
              </div>
              <div className="items-list">
                <img src="" alt="" />
                <p className="item-name"></p>
                <p className="item-price"></p>
                <div className="add-button"></div>
              </div>
              <div className="items-list">
                <img src="" alt="" />
                <p className="item-name"></p>
                <p className="item-price"></p>
                <div className="add-button"></div>
              </div>
            </div>
          </div>
        </div>
        {/* ------------------------------------------------------------------------------------------------------ */}
        <div className="items-div">
          <div className="items-menu" id="MERECHANDISE">
            <div className="items-cat">
              <p className="menu-categories-title"></p>
              <div className="items-list">
                <img src="" alt="" />
                <p className="item-name"></p>
                <p className="item-price"></p>
                <div className="add-button"></div>
              </div>
              <div className="items-list">
                <img src="" alt="" />
                <p className="item-name"></p>
                <p className="item-price"></p>
                <div className="add-button"></div>
              </div>
              <div className="items-list">
                <img src="" alt="" />
                <p className="item-name"></p>
                <p className="item-price"></p>
                <div className="add-button"></div>
              </div>
              <div className="items-list">
                <img src="" alt="" />
                <p className="item-name"></p>
                <p className="item-price"></p>
                <div className="add-button"></div>
              </div>
            </div>
          </div>
        </div>
        {/* ------------------------------------------------------------------------------------------------------ */}
        <div className="items-div">
          <div className="items-menu" id="HAPPY-HOUR">
            <div className="items-cat">
              <p className="menu-categories-title"></p>
              <div className="items-list">
                <img src="" alt="" />
                <p className="item-name"></p>
                <p className="item-price"></p>
                <div className="add-button"></div>
              </div>
              <div className="items-list">
                <img src="" alt="" />
                <p className="item-name"></p>
                <p className="item-price"></p>
                <div className="add-button"></div>
              </div>
              <div className="items-list">
                <img src="" alt="" />
                <p className="item-name"></p>
                <p className="item-price"></p>
                <div className="add-button"></div>
              </div>
              <div className="items-list">
                <img src="" alt="" />
                <p className="item-name"></p>
                <p className="item-price"></p>
                <div className="add-button"></div>
              </div>
            </div>
          </div>
        </div>
        {/* ------------------------------------------------------------------------------------------------------ */}
      </div>
    </div>
  );
};

export default Itemslist;
