import React from "react";
import "./itemslist.css";
import searchicon from "../../assets/search.png";
import favouriteicon from "../../assets/like.png";
import returnicon from "../../assets/back.png";

const Itemslist = () => {
  const snippets = [];
  for (let i = 0; i < 10; i++) {
    snippets.push(
      <div className="items-cat" key={i}>
        <p className="menu-categories-title">STARTERS &amp; SHAREABLES</p>
        <div className="items-list">
          <img
            className="item-list-image"
            src="https://images.mydigimenu.com/media/ClCan7aQ9k/ClCan7aQ9k-03072023070000475.jpeg?w=200&h=200"
            alt=""
          />
          <div className="other-info">
            <p className="item-name">JUMBO COMBO VEG</p>
            <p className="description">
              A delectable array of our most popular veggie starters: Onion
              rings, potato skins, bruschetta and Southwest spring rolls.
            </p>
            <div className="to-buy">
              <p className="item-price">₦15500.00</p>
              <div className="add-button">ADD</div>
            </div>
          </div>
        </div>

        <div className="items-list">
          <img
            className="item-list-image"
            src="https://images.mydigimenu.com/media/ClCan7aQ9k/ClCan7aQ9k-03072023070000475.jpeg?w=200&h=200"
            alt=""
          />
          <div className="other-info">
            <p className="item-name">JUMBO COMBO VEG</p>
            <p className="description">
              A delectable array of our most popular veggie starters: Onion
              rings, potato skins, bruschetta and Southwest spring rolls.
            </p>
            <div className="to-buy">
              <p className="item-price">₦15500.00</p>
              <div className="add-button">ADD</div>
            </div>
          </div>
        </div>
        <div className="items-list">
          <img
            className="item-list-image"
            src="https://images.mydigimenu.com/media/ClCan7aQ9k/ClCan7aQ9k-03072023070000475.jpeg?w=200&h=200"
            alt=""
          />
          <div className="other-info">
            <p className="item-name">JUMBO COMBO VEG</p>
            <p className="description">
              A delectable array of our most popular veggie starters: Onion
              rings, potato skins, bruschetta and Southwest spring rolls.
            </p>
            <div className="to-buy">
              <p className="item-price">₦15500.00</p>
              <div className="add-button">ADD</div>
            </div>
          </div>
        </div>
        <div className="items-list">
          <img
            className="item-list-image"
            src="https://images.mydigimenu.com/media/ClCan7aQ9k/ClCan7aQ9k-03072023070000475.jpeg?w=200&h=200"
            alt=""
          />
          <div className="other-info">
            <p className="item-name">JUMBO COMBO VEG</p>
            <p className="description">
              A delectable array of our most popular veggie starters: Onion
              rings, potato skins, bruschetta and Southwest spring rolls.
            </p>
            <div className="to-buy">
              <p className="item-price">₦15500.00</p>
              <div className="add-button">
                <div className="add">ADD</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="itemscontainer">
      <div className="fixedheader">
        <div className="left-header">
          {/* <div className="goback"> */}
          <a className="" href="/Menucat">
            <img className="search-it" src={returnicon} alt="search-icon" />
          </a>
          {/* </div> */}
        </div>
        <div className="right-header">
          <div className="favourite">
            <img
              className="favourites"
              src={favouriteicon}
              alt="favourite-icon"
            />
          </div>
          <div className="search-bar" href="/Menucat">
            <img className="search-it" src={searchicon} alt="search-icon" />
          </div>
        </div>
      </div>
      {/* ------------------------------------------------------------------------------------------------------ */}
      <div className="mobile-container">
        {/* --------------------------------------------------------------------------- */}
        <div className="menu-item red-bg">
          <div className="menu-title">
            <a className="menu-title-text" href="#EATS-MENU">
              EATS MENU
            </a>
          </div>
        </div>
        <div className="menu-item">
          <div className="menu-title">
            <a className="menu-title-text" href="#DRINKS-MENU">
              DRINKS MENU
            </a>
          </div>
        </div>
        <div className="menu-item">
          <div className="menu-title">
            <a className="menu-title-text" href="#SHISHA-MENU">
              SHISHA MENU
            </a>
          </div>
        </div>
        <div className="menu-item">
          <div className="menu-title">
            <a className="menu-title-text" href="#MERCHANDISE">
              MERCHANDISE
            </a>
          </div>
        </div>
        <div className="menu-item">
          <div className="menu-title">
            <a className="menu-title-text" href="#HAPPY-HOUR">
              HAPPY HOUR
            </a>
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
          />
          <div className="menu-title">STARTERS &amp; SHAREABLES</div>
        </div>

        <div className="menu-item2">
          <img
            alt=""
            draggable="false"
            src="https://images.mydigimenu.com/media/ClCan7aQ9k/ClCan7aQ9k-24062019063010327.png?w=250&h=250"
          />
          <div className="menu-title">LEGENDARY® STEAK BURGERS</div>
        </div>

        <div className="menu-item2">
          <img
            alt=""
            draggable="false"
            src="https://images.mydigimenu.com/media/ClCan7aQ9k/ClCan7aQ9k-13092220097280213.jpeg?w=250&h=250"
          />
          <div className="menu-title">SANDWICHES</div>
        </div>

        <div className="menu-item2">
          <img
            alt=""
            draggable="false"
            src="https://images.mydigimenu.com/media/ClCan7aQ9k/ClCan7aQ9k-24062019064780387.png?w=250&h=250"
          />
          <div className="menu-title">SALADS</div>
        </div>

        <div className="menu-item2">
          <img
            alt=""
            draggable="false"
            src="https://images.mydigimenu.com/media/ClCan7aQ9k/ClCan7aQ9k-24062019065940556.png?w=250&h=250"
          />
          <div className="menu-title">SPECIALTY ENTRÉES</div>
        </div>

        <div className="menu-item2">
          <img
            alt=""
            draggable="false"
            src="https://images.mydigimenu.com/media/ClCan7aQ9k/ClCan7aQ9k-24062019060430989.png?w=250&h=250"
          />
          <div className="menu-title">DESSERTS &amp; MILKSHAKES</div>
        </div>
      </div>
      {/* ---------------------------------------------------------------------------------------------------------- */}
      <div className="items-div">
        <div className="items-menu" id="EATS-MENU">
          {snippets}
        </div>
      </div>
    </div>
  );
};

export default Itemslist;
