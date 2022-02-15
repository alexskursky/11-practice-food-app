import react from "react";

import classes from "./FoodMenu.module.css";
import Button from "../UI/Button";
import Item from "./Item";
import React from "react";

const FoodMenu = (props) => {
  

  return (
    <section className={classes.foodmenu_section}>
      {props.itemsList.map((items) => (
        <Item
          key={items.id}
          name={items.name}
          descr={items.description}
          price={items.price}
          submit={props.onSubmit}
        />
      ))}
    </section>
  );
};

export default FoodMenu;
