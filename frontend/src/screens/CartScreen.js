import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "../components/CartItem";

const CartScreen = () => {
  const userCart = useSelector((state) => state.cart);
  const { cartItems } = userCart;

  return (
    <div className="cart">
      {cartItems.length > 0 ? (
        <>
          <h1>Your Cart</h1>
          <div className="headings">
            <div className="head">Product</div>
            <div className="head">Price</div>
            <div className="head">Quantity</div>
            <div className="head">Total</div>
            <div className="head"> </div>
          </div>
          <div className="cart-items">
            {cartItems.map((item, index) => (
              <CartItem item={item} key={`cart-${item._id}-item-${index}`} />
            ))}
          </div>
        </>
      ) : (
        <h1>Your cart is empty!</h1>
      )}
    </div>
  );
};

export default CartScreen;
