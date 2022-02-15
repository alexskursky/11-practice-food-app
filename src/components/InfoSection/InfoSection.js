import react from "react";

import classes from "./InfoSection.module.css";

const InfoSection = (props) => {
  return (
    <section className={classes.info_section}>
      <div className={classes.sector}>
        <h2>About</h2>
        <p>In our FoodApp you can order delicious food delivery</p>
      </div>
    </section>
  );
};

export default InfoSection;