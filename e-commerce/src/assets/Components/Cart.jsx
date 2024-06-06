import { useEffect, useState } from "react";
import Navigation from "./Navigation";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

export default function Cart() {
  const [cartItem, setCartItem] = useState(null);
  const deleteNotice = () =>
    toast("Item has been deleted successfully! Refresh to see");

  useEffect(() => {
    const storedItem = localStorage.getItem("AddedData");

    if (storedItem) {
      setCartItem(JSON.parse(storedItem));
    }
  }, []);

  if (!cartItem) {
    return (
      <>
        <Navigation />
        <div className="noitems-conatiner">
          <div>There is no any items in cart!!!</div>
          <Link to={"/"}>
            <button className="continue-btn">Continue Shopping</button>
          </Link>
        </div>
      </>
    );
  }

  const del = () => {
    localStorage.removeItem("AddedData");
    deleteNotice();
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
          <ToastContainer
            position="top-right"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
        </div>
        <div className="cart-info">
          <label>$ {cartItem.total}</label>
        </div>
      </div>
    </>
  );
}
