import React, { useState } from "react";
import "./itemslist.css";
import searchicon from "../../assets/search.png";
import favouriteicon from "../../assets/like.png";
import returnicon from "../../assets/back.png";

const Itemslist = () => {
  // -----------------------------------------------------------------------------------------------
  const foodArray = [
    {
      category: "BREAKFAST",
    },
    {
      category: "PASTA",
    },
    {
      category: "SALAD",
      imageSrc:
        "https://www.acouplecooks.com/wp-content/uploads/2019/05/Chopped-Salad-008.jpg",
      items: [
        ["COLESLAW", "₦1613", "Nicely sliced veggies with cream"],
        [
          "AVOCADO SALAD",
          "₦4384",
          "Nicely sliced veggies with avocado with cream",
        ],
        [
          "AVOCADO CHICKEN SALAD",
          "₦6450",
          "Nicely sliced veggies with avocado and chicken breast with cream",
        ],
      ],
    },
    { category: "RICE" },
    { category: "GRILLS" },
    { category: "FINGER FOOD" },
    { category: "PROTEIN" },
    { category: "SPECIALS & WEEKEND FLAVOUR" },
    { category: "PLATTERS" },
    { category: "EXTRA DIPS" },
  ];
  // --------------------------------------------------------------------------------------------------
  const nonAlchoholArray = [
    "NON-ALCHOHOL",
    "SMOTHIES",
    "MILK SHAKES",
    "MOCKTAILS",
    "SHOOTERS",
    "BELLINIS",
    "TIKI'S",
    "APPERATIVES & CREAM LIQUOR",
  ];
  const alchoholArray = [
    "VODKA",
    "TEQUILA",
    "ENERGY DRINK",
    "BITTERS",
    "LAGER BEER",
    "TOT/SHOT",
    "WHISKEY/WHISKY",
    "GIN",
    "CHAMPAGNE",
    "RED WINE",
    "WHITE WINE",
    "BRANDY/COGNAC",
  ];
  const cocktailsArray = [
    "FROZEN COCKTAILS",
    "SIGNATURE COCKTAILS",
    "CLASSIC COCKTAILS",
  ];
  const hookerArray = [
    "DOUBLE-PIPE SHISHA",
    "SINGLE-PIPE SHISHA",
    "EXTRA COAL",
  ];
  const vapour = [];

  const snippets = [];
  const menus = [
    "FOOD MENU",
    "NON ALCHOHOL",
    "ALCHOHOL",
    "COCKTAILS",
    "SHISHA/HOOKAH",
    "VAPOUR",
  ];
  const catee = [];

  const [selectedMenuIndex, setSelectedMenuIndex] = useState(0);

  const changeTheActiveButton = (indexOfElement) => {
    setSelectedMenuIndex(indexOfElement);
  };

  const changeTheCategoryList = (indexOfElement) => {
    if (indexOfElement == 0) {
      createTheSubCategories(foodArray);
    } else if (indexOfElement == 1) {
      createTheSubCategories(nonAlchoholArray);
    } else if (indexOfElement == 2) {
      createTheSubCategories(alchoholArray);
    } else if (indexOfElement == 3) {
      createTheSubCategories(cocktailsArray);
    } else if (indexOfElement == 4) {
      createTheSubCategories(hookerArray);
    } else {
      createTheSubCategories(vapour);
    }
  };

  const createTheSubCategories = (menuArray) => {
    for (let i = 0; i < menuArray.length; i++) {
      catee.push(
        <div className="menu-item2">
          <img alt="" draggable="false" src={menuArray[i].imageSrc} />
          <div className="menu-title">{menuArray[i].category}</div>
        </div>
      );
    }
  };

  const menus_snippet = menus.map((element, indexOfElement) => (
    <div
      key={indexOfElement}
      className={`menu-item ${
        indexOfElement === selectedMenuIndex ? "red-bg" : ""
      }`}
      onClick={() => {
        changeTheActiveButton(indexOfElement);
        // changeTheCategoryList(indexOfElement);
      }}
    >
      <div className="menu-title">
        <a className="menu-title-text" href="#">
          {element}
        </a>
      </div>
    </div>
  ));

  // --------------------------------------------------------------------------------------------

  for (let i = 0; i < 2; i++) {
    snippets.push(
      <div className="items-cat" key={i}>
        <p className="menu-categories-title">STARTERS &amp; SHAREABLES</p>
        <div className="items-list">
          <img
            className="item-list-image"
            src="https://www.acouplecooks.com/wp-content/uploads/2019/05/Chopped-Salad-008.jpg"
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
  // ---------------------------------------------------------------------------------------------
  return (
    <div className="itemscontainer">
      <div className="fixedheader">
        <div className="left-header">
          <a className="" href="/Menucat">
            <img className="search-it" src={returnicon} alt="search-icon" />
          </a>
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
      <div className="mobile-container">{menus_snippet}</div>
      <div className="menu">{catee}</div>
      <div className="items-div">
        <div className="items-menu" id="EATS-MENU">
          {snippets}
        </div>
      </div>
    </div>
  );
};

export default Itemslist;
