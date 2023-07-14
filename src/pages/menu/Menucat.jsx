import React, { useState } from 'react';
import "./menumodal.css";

const Menucat = () => {

  return (
<div className='parentcontainer'>
    <div class="menucontainer">
        <div class="categories">
          <a href="/Itemslist">EATS MENU</a></div>
        <div class="categories">DRINKS MENU</div>
        <div class="categories">SHISHA MENU</div>
        <div class="categories">MERCHANDISE</div>
        <div class="categories">HAPPY HOUR</div>
    </div>
    </div>
  );
};

export default Menucat;
