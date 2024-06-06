import { useEffect, useState } from "react";
import Navigation from "./Navigation";
import Demo from "../../Photos/demo-cart.jpg";

export default function Cart() {
  const [cartItem, setCartItem] = useState(null);

  useEffect(() => {
    const storedItem = localStorage.getItem("AddedData");
    setCartItem(JSON.parse(storedItem));
  }, []);

  if (!cartItem) {
    return <>Nothing in cart</>;
  }

  const del = () => {
    localStorage.removeItem("AddedData");
  };

  console.log(cartItem);

  return (
    <>
      <Navigation />
      <div>Products that are in your cart are!!</div>
      <div className="cart-products">
        <div className="image-wrapper">
          <img src={cartItem.image}></img>
        </div>
        <div className="cart-info">
          <label>{cartItem.name}</label>
        </div>
        <div className="cart-info">
          <label>$ {cartItem.price}</label>
        </div>
        <div className="cart-info">
          <label>{cartItem.quantity}</label>
        </div>
        <div className="cart-info">
          <button onClick={del}>Delete</button>
        </div>
        <div className="cart-info">
          <label>$ {cartItem.total}</label>
        </div>
      </div>
    </>
  );
}
