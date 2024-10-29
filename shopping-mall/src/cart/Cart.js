import React, { useState } from "react";
import style from "./Cart.module.css";
import Header from "../header/Header.js";

// Cart 컴포넌트 정의
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

  // 수량 변경 핸들러
  const handleQuantityChange = (id, delta) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  // 아이템 제거 핸들러
  const handleRemoveItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // 옵션 변경 핸들러
  const handleOptionChange = (id, newOption) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, selectedOption: newOption } : item
      )
    );
  };

  // 수량 감소 버튼 클릭 핸들러
  const handleMinusButtonClick = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : null // 수량이 1이면 null 반환하여 삭제
          : item
      ).filter(item => item !== null) // null인 아이템 제거
    );
  };

  // 총 금액 계산
  const total = cartItems.reduce(
    (sum, item) => sum + (item.price - item.discount) * item.quantity,
    0
  );

  // Cart 컴포넌트의 렌더링 부분
  return (
    <div className={style["back-img1"]}>
      <Header />
      <div className={style["cart-container"]}>
        <h2>Shopping Cart</h2>
        <div className={style["cart-header"]}>
          <span>이미지</span>
          <span>상품 정보</span>
          <span>수량</span>
          <span>구매 금액</span>
          <span>할인 금액</span>
          <span>옵션 선택</span>
        </div>
        <ul className={style["cart-items"]}>
          {cartItems.map((item) => (
            <li key={item.id} className={style["cart-item"]}>
              <img
                src={item.image}
                alt={item.name}
                className={style["item-image"]}
              />
              <span className={style["item-name"]}>{item.name}</span>
              <div className={style["item-quantity"]}>
                <button
                  onClick={() => handleMinusButtonClick(item.id)} // 수정된 부분
                  disabled={item.quantity <= 1}
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button onClick={() => handleQuantityChange(item.id, 1)}>
                  +
                </button>
              </div>
              <span className={style["item-price"]}>{item.price}원</span>
              <span className={style["item-discount"]}>{item.discount}원</span>
              <button
                onClick={() => handleOptionChange(item.id, item.selectedOption)}
                className={style["option-button"]}
              >
                옵션 선택
              </button>
              <button
                className={style["small-remove-button"]}
                onClick={() => handleRemoveItem(item.id)}
              >
                ㊀
              </button>
            </li>
          ))}
        </ul>
        <div className={style["cart-total"]}>
          <div className={style["total-summary"]}>
            {/* "상품 개수"와 "총 금액" 표시 */}
            <span>상품 개수: {cartItems.reduce((acc, item) => acc + item.quantity, 0)}개</span>
            <span>                                 총 금액: {total}원</span>
          </div>
          <div className={style["cart-buttons"]}>
            <button className={style["order-button"]}>주문하기</button>
            <button className={style["add-button"]}>쇼핑 더하기</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
