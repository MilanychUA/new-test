import React, { useState, useEffect } from "react";
import Cart from "./Cart";
import CartResult from "./CartResult";
import Filter from "./Filter";
import classes from "./Header.module.css";

const Header = (props) => {
  //  const fffss = () => {
  //   const len = props.dataInCart.length;
  //   const res = props.discountData.findIndex((fid) => fid.id === props.addedId);

  //   console.log(len);
  //   console.log(res + "Result of search");
  //   if (len != 0) {
  //     const res2 = props.discountData.findIndex((fid) => fid.id === props.addedId);
  //     const discountRow = props.discountData[res2]; // row in discount database
  //     let update;
  //     const dataRow =
  //       props.dataInCart[
  //         props.dataInCart.findIndex((fid) => fid.id === props.addedId)
  //       ]; // row in base of cart
  //     if (res != -1) {
  //       console.log("WILL BE ADDED NEW ELEMENT IN ARRAY WITH DISCONT");
  //       console.log(discountRow)
  //       let updates;
  //         update = {
  //           ...dataRow,
  //           discount: discountRow.percent,
  //           totalcost:
  //             dataRow.amount * dataRow.price -
  //             (dataRow.amount * dataRow.price * discountRow.percent) / 100,
  //         };
  //         console.log(update);

  //     } else {
  //       console.log("WILL BE ADDED NEW ELEMENT IN ARRAY WITHOUT DISCONT");
  //       update = {
  //         ...dataRow,
  //         discount: 0,
  //         totalcost: dataRow.amount * dataRow.price,
  //       };
  //       console.log(update);
  //     }
  //   }
  // }
  // TOTOAL AMOUNT IN MY CART
  const countItems = props.cartDataWithDiscount.reduce(
    (sum, item) => (sum += item.amount),
    0
  );

  // TOTAL COST OF MY CART
  const cartSum = props.cartDataWithDiscount.reduce(
    (sum, item) => (sum += item.totalcost),
    0
  );
  return (
    <div className={classes.div}>
      <Cart
        amountInCart={countItems}
        cartDataWithDiscount={props.cartDataWithDiscount}
        onIncreaseItem={props.onIncreaseItem}
        onDecreaseItem={props.onDecreaseItem}
      />
      <CartResult cartSum={cartSum} />
      <Filter filterBy={props.cartDataWithDiscount}/>
    </div>
  );
};

export default Header;
