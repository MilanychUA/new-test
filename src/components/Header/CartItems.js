import React from "react";
import classes from "./CartItems.module.css";

const CartItems = (props) => {
  return (
    <div className={classes.divCart} onClick={props.onShowCart}>Total in my cart = {props.amounts}</div>
  );
};

export default CartItems;
