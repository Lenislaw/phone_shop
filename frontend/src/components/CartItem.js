import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { addToCart, removeFromCart } from "../actions/cartActions";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const [count, setCount] = useState(item.qty);
  console.log("item", count);
  count > item.countInStock && setCount(item.countInStock);

  useEffect(() => {
    addToCartHandler();
  }, [count]);
  const addToCartHandler = () => {
    dispatch(addToCart(item.product, count));
  };
  const removeItemHandler = () => {
    dispatch(removeFromCart(item.product));
  };

  return (
    <div className="cart-item">
      <div className="details">
        <div className="detail">
          <div className="photo">
            <img
              className="photo-image"
              src={item.image}
              alt={item.name}
            />
          </div>
          <p>{item.name}</p>
        </div>
        <div className="detail">
          <p>{item.price}$</p>
        </div>
        <div className="detail">
          <div className="qty">
            <div className="buttons">
              <Button
                className="buttons-btn"
                aria-label="reduce"
                onClick={() => {
                  setCount(Math.max(count - 1, 0));
                  addToCartHandler();
                }}
              >
                <RemoveIcon fontSize="small" />
              </Button>
              <div className="qty-window">{count}</div>
              <Button
                className="buttons-btn"
                aria-label="increase"
                onClick={() => {
                  setCount(count + 1);
                  addToCartHandler();
                }}
              >
                <AddIcon fontSize="small" />
              </Button>
            </div>
          </div>
        </div>
        <div className="detail">
          <p>{(item.qty * item.price).toFixed(2)} $</p>
        </div>
        <div className="detail">
          <i
            className="icon fas fa-trash fa-2x"
            onClick={removeItemHandler}
          ></i>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
