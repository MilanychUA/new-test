import React, { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

import classes from "./App.module.css";
import NavigationBar from "./components/NavigationBar/Navigation";

import getIncreasedCartByNitems from './utils/getIncerasedCartByNItems'

const INITIAL_DATA = [
  { id: "m1", title: "Boots", size: "10 (US)", price: 20 },
  { id: "m2", title: "Boots", size: "11 (US)", price: 30 },
  { id: "m3", title: "Boots", size: "9 (US)", price: 10 },
  { id: "m4", title: "Boots", size: "8 (US)", price: 40 },
];

function App() {
  // Base of shoes
  const [dataShoes, setDataSHoes] = useState(INITIAL_DATA);
  //base of cart
  const [cartData, setCartData] = useState([]);
  const [isLoadingAnimationShown, setLoadingAnimationShown] = useState(false);
  const [discount, setDiscount] = useState([
    { id: "m1", percent: 20.0 },
    { id: "m2", percent: 22.0 },
  ]);
  // NEW ARRAY WITH CART+DISCOUNT
  const [cartWithDiscount, setCartWithDiscount] = useState([]);

  useEffect(()=>{
    // Everytime cartWithDiscount updated set isLoadingAnimationShown to true for ANIMATION_TIME seconds...
    // ... after this tame passed set it back to false
    
    // Not show on initial state
    if(cartWithDiscount.length !== 0){
      setLoadingAnimationShown(true);
      const timer = setTimeout(() => {
        setLoadingAnimationShown(false);
      }, 4000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [cartWithDiscount])

  // param @elemt is a type of { id, amount, title } - NOW
  // param @elemt is a type of { id, amount, title }
  const addToCart = (element) => {
    let upd;
    let updates;
    let updates2;
    let newCartElementDiscount;
    // Find ID of shoes in array of cart
    const res = cartData.findIndex((r) => r.id === element.id);
    const updateAmont = cartData[res];

    // Find ID of shoes in Discount array
    const res2 = discount.findIndex((r) => r.id === element.id);
    const discountRow = discount[res2];

    // Find ID of shoes in array of Discount and Shoes
    const res3 = cartWithDiscount.findIndex((r) => r.id === element.id);
    const rowWithShoesDisc = cartWithDiscount[res3];

    if (rowWithShoesDisc) {
      console.log(rowWithShoesDisc);
      if (discountRow) {
        // If we have discount

        upd = {
          ...rowWithShoesDisc,
          amount: rowWithShoesDisc.amount + element.amount,
        };
        updates = [...cartWithDiscount];
        updates[res3] = upd;
        setCartWithDiscount(updates);

        newCartElementDiscount = {
          ...rowWithShoesDisc,
          amount: rowWithShoesDisc.amount + element.amount,
          totalcost:
            (rowWithShoesDisc.amount + element.amount) *
              rowWithShoesDisc.price -
            ((rowWithShoesDisc.amount + element.amount) * discountRow.percent) /
              100,
        };
        updates2 = [...cartWithDiscount];
        updates2[res3] = newCartElementDiscount;
        setCartWithDiscount(updates2);
      } else {
        // If we DONT have discount

        newCartElementDiscount = {
          ...rowWithShoesDisc,
          amount: rowWithShoesDisc.amount + element.amount,
          totalcost:
            (rowWithShoesDisc.amount + element.amount) * rowWithShoesDisc.price,
        };
        updates2 = [...cartWithDiscount];
        updates2[res3] = newCartElementDiscount;
        setCartWithDiscount(updates2);
      }
    } else {
      if (discountRow) {
        // If we have discount
        newCartElementDiscount = {
          ...element,
          discount: discountRow.percent,
          totalcost:
            element.amount * element.price -
            (element.amount * element.price * discountRow.percent) / 100,
        };
        setCartData([...cartData, element]);
        setCartWithDiscount([...cartWithDiscount, newCartElementDiscount]);
      } else {
        // If we DONT have discount
        newCartElementDiscount = {
          ...element,
          discount: 0,
          totalcost: element.amount * element.price,
        };
        setCartData([...cartData, element]);
        setCartWithDiscount([...cartWithDiscount, newCartElementDiscount]);
      }
    }
  };

  //ON ICREASE AMOUNT IN CART
  const incAmountInCart = (item) => {
    setCartWithDiscount(getIncreasedCartByNitems(cartWithDiscount, item, 1));
  };

  // OD DECREASE AMOUNT IN CART
  const decAmountInCart = (item) => {
    const res = cartWithDiscount.findIndex((r) => r.id === item);
    let updateAmont = cartWithDiscount[res];
    let updates;
    if (updateAmont.amount != 1) {
      updateAmont = {
        ...updateAmont,
        amount: updateAmont.amount - 1,
        totalcost: updateAmont.amount * updateAmont.price -
        (updateAmont.amount * updateAmont.price * updateAmont.discount) / 100 -
        (updateAmont.price - (updateAmont.price * updateAmont.discount) / 100),
      };
      updates = [...cartWithDiscount];
      updates[res] = updateAmont;
      setCartWithDiscount(updates);
    } else {
      updates = cartWithDiscount.filter((it) => it.id != item);
      setCartWithDiscount(updates);
    }
  };
  return (
    <React.Fragment>
      <NavigationBar isAnimationShown={isLoadingAnimationShown}/>
      <Header
        dataInCart={cartData}
        discountData={discount}
        cartDataWithDiscount={cartWithDiscount}
        onIncreaseItem={incAmountInCart}
        onDecreaseItem={decAmountInCart}
      />
      <Main dataShoes={dataShoes} addToCart={addToCart} />
    </React.Fragment>
  );
}

export default App;
