import React from "react";
import Items from "./Items";
import classes from "./Main.module.css";

const Main = (props) => {
  return (
    <div className={classes.mainList}>
      {/* PLACE FOR FILTER MODULE */}
      <Items dataShoes={props.dataShoes} addToCart={props.addToCart}/>
      {/* PLACE FOR AMOUNT INFORMATION MODULE */}
    </div>
  );
};
console.log('223')
export default Main;
