import React, { useState } from "react";

import classes from "./Cart.module.css";

const Cart = (props) => {

  return (
    <React.Fragment>
      <div className={classes.cart} onClick={props.onCartOpenHandler}>
         <div><i class='fas fa-shopping-cart'></i> Your Cart</div>
          <div className={classes.cart_counter}>
              {props.sumAmount}
          </div>
      </div>
    </React.Fragment>
  );
};

export default Cart;
