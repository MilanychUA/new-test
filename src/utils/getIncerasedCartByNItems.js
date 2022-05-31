const getIncreasedCartByNitems = (cart, itemToIncrease, increaseNum = 1) =>{
    console.log(cart, itemToIncrease)
    // const itemInCart = cart.find(item=>item.id === itemToIncrease) // undefined
    const itemInCartIndex = cart.findIndex((r) => r.id === itemToIncrease);
    const itemInCart = cart[itemInCartIndex];
    // let updateAmont = cartWithDiscount[itemInCart];
    const updatedElement = { ...itemInCart,
      amount: itemInCart.amount + increaseNum,
      totalcost:
      itemInCart.amount * itemInCart.price -
        (itemInCart.amount * itemInCart.price * itemInCart.discount) / 100 +
        (itemInCart.price - (itemInCart.price * itemInCart.discount) / 100),
    }

    const updatedCart = [ ...cart ]
    updatedCart[itemInCartIndex] = updatedElement
    return updatedCart
  }

  export default getIncreasedCartByNitems