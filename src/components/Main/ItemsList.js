import React, { useState, useRef } from "react";
import classes from "./ItemList.module.css";
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';



const ItemsList = (props) => {
  const [inputAmount, setInputAmount] = useState(0);
  const ref = useRef();

  const onInputAmount = (event) => setInputAmount(event.target.value);

  const addSubmit = (event) => {
    event.preventDefault();
    const addItemToCart = {
      id: props.id,
      title: props.title,
      price: props.price,
      amount: Number(inputAmount),
    };
    props.addToCart(addItemToCart);
    setInputAmount(0);
  };
  const decAmount = () => { //Decrement Amount by clicking on div "-""
    if (Number(ref.current.value) != 0) {
      setInputAmount(+ref.current.value - 1);
    } else setInputAmount(+ref.current.value);
  };
  const incAmount = () => { // Increase Amount by clicking on div "+"
    setInputAmount(+ref.current.value + 1);
  };
  return (
    <div className={classes.div}>
      <form onSubmit={addSubmit} className={classes.formDis}>
        <label className={classes.id}>{props.id}</label>
        <label className={classes.title}>{props.title}</label>
        <label className={classes.size}>{props.size}</label>
        <div className={classes.price}>${props.price.toFixed(2)}</div>
        <div className={classes.input}>
          <RemoveIcon onClick={decAmount} className={classes.inc} />
      
          <input
            type="number"
            ref={ref}
            min="1"
            value={inputAmount}
            onChange={onInputAmount}
          />
          <AddIcon onClick={incAmount} className={classes.inc}>
            +
          </AddIcon>
          <Button variant="contained" className={classes.button} type="submit">
            Add to cart
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ItemsList;
