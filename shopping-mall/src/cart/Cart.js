import React, { useState } from "react";
import styles from "./Cart.module.css";
import Header from "../header/Header.js";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Product 1",
      price: 10000,
      discount: 2000,
      quantity: 1,
      image: "../../image/back.jpg",
      options: ["Size S", "Size M", "Size L"],
      selectedOption: "Size M",
    },
    {
      id: 2,
      name: "Product 2",
      price: 15000,
      discount: 3000,
      quantity: 2,
      image: "../../image/back.jpg",
      options: ["Color Red", "Color Blue", "Color Green"],
      selectedOption: "Color Blue",
    },
    {
      id: 3,
      name: "Product 3",
      price: 20000,
      discount: 2500,
      quantity: 1,
      image: "../../image/back.jpg",
      options: ["Type A", "Type B", "Type C"],
      selectedOption: "Type A",
    },
  ]);

  const handleQuantityChange = (id, delta) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const total = cartItems.reduce(
    (sum, item) => sum + (item.price - item.discount) * item.quantity,
    0
  );

  return (
    <div className={styles["cart-container"]}>
      <Header />
      <div className={styles["cart-content"]}>
        <div className={styles["cart-items-section"]}>
          <h2>Shopping Cart</h2>
          <div className={styles["cart-header"]}>
            <span>Image</span>
            <span>Product</span>
            <span>Quantity</span>
            <span>Price</span>
            <span>Discount</span>
            <span>Options</span>
          </div>
          <ul className={styles["cart-items"]}>
            {cartItems.map((item) => (
              <li key={item.id} className={styles["cart-item"]}>
                <div className={styles["item-image-container"]}>
                  <img src={item.image} alt={item.name} className={styles["item-image"]} />
                  <button
                    className={styles["small-remove-button"]}
                    onClick={() => handleRemoveItem(item.id)}
                  >
                    X
                  </button>
                </div>
                <span className={styles["item-name"]}>{item.name}</span>
                <div className={styles["item-quantity"]}>
                  <button onClick={() => handleQuantityChange(item.id, -1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleQuantityChange(item.id, 1)}>+</button>
                </div>
                <span className={styles["item-price"]}>{item.price}원</span>
                <span className={styles["item-discount"]}>{item.discount}원</span>
                <button className={styles["option-button"]}>{item.selectedOption}</button>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Right-side summary box */}
        <div className={styles["summary-box"]}>
          <h3>Order Summary</h3>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id} className={styles["summary-item"]}>
                <span>{item.name} x {item.quantity}</span>
                <span>{(item.price - item.discount) * item.quantity}원</span>
              </li>
            ))}
          </ul>
          <div className={styles["total-price"]}>
            <span>Total:</span>
            <span>{total}원</span>
          </div>
          <button className={styles["checkout-button"]}>Order</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
