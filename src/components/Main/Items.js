import React from "react";
import ItemsList from "./ItemsList";

const Items = (props) => {
  return (
    <div>
      {props.dataShoes.map((items) => (
        <ItemsList
          key={items.id}
          id={items.id}
          title={items.title}
          price={items.price}
          size={items.size}
          addToCart={props.addToCart}
        />
      ))}
    </div>
  );
};

export default Items;
