import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "../components/CartItem";

const CartScreen = ({ history }) => {
  const userCart = useSelector((state) => state.cart);
  const { cartItems } = userCart;

  const dispatch = useDispatch();

  const checkoutHandler = () => {
    history.push("/shipping");
  };

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
          <div className="checkout">
            <div className="subtotal">
              <h5>
                Total amount of items is (
                {cartItems.reduce((acc, item) => acc + item.qty, 0)}).
              </h5>
              <h5>
                Total to pay:{" "}
                {cartItems
                  .reduce((acc, item) => acc + item.qty * item.price, 0)
                  .toFixed(2)}{" "}
                ${" "}
              </h5>
            </div>
            <button
              className="checkout-btn"
              disabled={cartItems.length === 0}
              onClick={checkoutHandler}
            >
              Proceed To Checkout
            </button>
          </div>
        </>
      ) : (
        <h1>Your cart is empty!</h1>
      )}
    </div>
  );
};

export default CartScreen;
