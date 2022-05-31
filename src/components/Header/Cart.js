import React, { useState } from "react";
import CartItems from "./CartItems";
import CartList from "./CartList";
import classes from "./Cart.module.css";

const Cart = (props) => {
  const [showCart, setShowCart] = useState(false);

  const onShowCart = () => setShowCart(!showCart);
  return (
    <div className={classes}>
      <CartItems amounts={props.amountInCart} onShowCart={onShowCart} />
      {showCart && (
        <CartList
          items={props.cartDataWithDiscount}
          onIncreaseItem={props.onIncreaseItem}
          onDecreaseItem={props.onDecreaseItem}
        />
      )}
    </div>
  );
};

export default Cart;
