import React from "react";
import Cart from "./Cart";

import classes from "./MainHeader.module.css";

const MainHeader = (props) => {
  return <div className={classes.header}>
      <h1>
          FoodApp
      </h1>
      <Cart onCartOpenHandler={props.isClicked} sumAmount={props.sumAmount}/>
  </div>;
};

export default MainHeader;
