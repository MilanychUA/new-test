import React from "react";
import classes from "./CartList.module.css";

const CartList = (props) => {
  const onInc = (event) => {
    props.onIncreaseItem(event.target.value);
  };
  const onDec = (event) => {
    props.onDecreaseItem(event.target.value);
  };

  return (
    <React.Fragment>
      <table className={classes.table}>
        <thead>
          <tr className={classes.headerTr}>
            <td>#</td>
            <td>Title</td>
            <td>Price</td>
            <td>Amount</td>
            <td>Discont</td>
            <td>Total cost</td>
            <td>Decision</td>
          </tr>
        </thead>
        <tbody>
          {props.items.map((item) => (
            <tr key={Math.random()} className={classes.tr}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.price.toFixed(2)}</td>
              <td>{item.amount}</td>
              <td>{item.discount.toFixed(2)}</td>
              <td>{item.totalcost.toFixed(2)}</td>
              <td>
                <button value={item.id} onClick={onDec}>
                  {" "}
                  Dec
                </button> \
                <button value={item.id} onClick={onInc}>
                  Inc
                </button>{" "}
                
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </React.Fragment>
  );
};

export default CartList;
