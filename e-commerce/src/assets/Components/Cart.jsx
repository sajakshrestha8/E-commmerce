import { useState } from "react";

export default function Cart() {
  const [cartItem, setCartItem] = useState(() => {
    localStorage.getItem("Additem");
  });

  console.log(cartItem);

  return (
    <>
      <div>{cartItem.title}</div>
    </>
  );
}
