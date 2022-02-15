import React from "react";
import react from "react";

import CartItem from "./CartItem";

import classes from "./CartModal.module.css";

const CartModal = (props) => {
  return (
    <React.Fragment>
      <div
        className={classes.modal_background}
        onClick={props.onCloseHandler}
      ></div>
      <div className={classes.modal_window}>
        <label>Hello</label>
        <ul>
          {props.cartItemsList.map((items) => (
            <CartItem
              key={items.id}
              name={items.name}
              descr={items.descr}
              amount={items.amount}
            />
          ))}
        </ul>
      </div>
    </React.Fragment>
  );
};

export default CartModal;
