import React from "react";
import react from "react";

const CartItem = (props) => {
  return (
    <React.Fragment>
      <li>{props.name}</li>
      <li>{props.descr}</li>
      <li>{props.amount}</li>
    </React.Fragment>
  );
};

export default CartItem;
