import React, { useState, useRef } from "react";

import classes from "./Item.module.css";

import Button from "../UI/Button";

const Item = (props) => {

  const inputAmountRef = useRef(0);

  const onClick = (event) => {
    event.preventDefault();
    props.submit(+inputAmountRef.current.value, props.name, props.descr);
    inputAmountRef.current.value = 0;
  };

  return (
    <React.Fragment>
      <div className={classes.menu_items}>
        <div>
          <ul className={classes.item}>
            <li className={classes.name}>{props.name}</li>
            <li className={classes.description}>{props.descr}</li>
            <li className={classes.price}>{props.price} $</li>
          </ul>
        </div>
        <form type="submit" className={classes.addtocart} onSubmit={onClick}>
          <div>
            <label>Amount</label>
            <input
              ref={inputAmountRef}
              type="number"
              min="0"
            ></input>
          </div>
          <Button type="submit">
            + Add
          </Button>
        </form>
      </div>
    </React.Fragment>
  );
};

export default Item;
