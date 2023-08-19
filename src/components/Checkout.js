import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import "./Checkout.css";
import EmptyCart from "./EmptyCart";
import Navbar from "./Navbar";

export default function CheckOut() {
  const cartData = localStorage.getItem("cartItem");
  const CartDataParsed = JSON.parse(cartData);
  const [prevCartItemId, setPrevCartItemId] = useState([]);
  localStorage.setItem("prevId", JSON.stringify(prevCartItemId));
  const [newCart, setNewCart] = useState([]);
  const [totalCost, setTotalCost] = useState(0);

  useEffect(function () {
    const CartWithqty = CartDataParsed.map((item) => ({
      ...item,
      qty: 1,
      quantity: item.quantity > 0 ? item.quantity - 1 : item.quantity,
    }));
    setNewCart(CartWithqty);
    localStorage.setItem("prevCartItem", JSON.stringify(newCart));
  }, []);

  useEffect(
    function () {
      const cartId = newCart.map((item) => item.id);
      localStorage.setItem("prevCartItem", JSON.stringify(newCart));
      setPrevCartItemId(cartId);
    },
    [newCart]
  );

  useEffect(
    function () {
      let total = 0;
      newCart?.map((item) => (total += (item.qty || 1) * item.price));
      setTotalCost(total);
    },
    [newCart]
  );

  function handleIncrement(cartItem) {
    if (cartItem.quantity > 0) {
      const increaseCount = newCart?.map((item) =>
        item.id === cartItem.id
          ? { ...item, qty: item.qty + 1, quantity: item.quantity - 1 }
          : item
      );
      setNewCart(increaseCount);
    }
  }

  function handleDecrement(cartItem) {
    if (cartItem.qty === 1) {
      const deleteItemByDecrement = newCart?.filter(
        (item) => item.id !== cartItem.id
      );
      localStorage.setItem("cartItem", JSON.stringify(deleteItemByDecrement));
      setNewCart(deleteItemByDecrement);
      return;
    }
    const decreaseCount = newCart?.map((item) =>
      item.id === cartItem.id
        ? { ...item, qty: item.qty - 1, quantity: item.quantity + 1 }
        : item
    );
    setNewCart(decreaseCount);
  }

  function handleDelete(cartItem) {
    const deleteItem = newCart?.filter((item) => item.id !== cartItem.id);
    localStorage.setItem("cartItem", JSON.stringify(deleteItem));
    setNewCart(deleteItem);
  }

  return (
    <div className="checkout">
      <Navbar />
      {newCart.length ? (
        <div className="cartItem">
          <h1>Shopping Cart</h1>
          {newCart?.map((cartItem) => (
            <div className="cartItems" key={cartItem.id}>
              <div className="cartItems-img-div">
                <img
                  src={cartItem?.imageURL}
                  alt={cartItem?.name}
                  width="100px"
                  height="100px"
                  className="cartItem-img"
                />
                <div className="cartItem-price-name">
                  <span>{cartItem?.name}</span>
                  <span>
                    <strong>${cartItem?.price}</strong>
                  </span>
                </div>
              </div>
              <div>
                {cartItem?.quantity > 0 ? (
                  <p>only {cartItem?.quantity} more left </p>
                ) : (
                  <p className="out-stock"> out of stock </p>
                )}
              </div>
              <div className="addcart-btn">
                <div className="increment-decrement-btn">
                  <button onClick={() => handleIncrement(cartItem)}>+</button>
                  <div>{cartItem.qty}</div>
                  <button onClick={() => handleDecrement(cartItem)}>-</button>
                </div>
                <div>
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => handleDelete(cartItem)}>
                    Delete
                  </Button>
                </div>
              </div>
            </div>
          ))}
          <hr />
          <div className="total">Total: ${totalCost}</div>
        </div>
      ) : (
        <>
          <EmptyCart />
        </>
      )}
    </div>
  );
}
