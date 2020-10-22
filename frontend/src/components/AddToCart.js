import React, { useState } from "react";

import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import AddToCartButton from "../components/AddToCartButton";

const AddToCart = ({ error, product, qty = 1 }) => {
  const [count, setCount] = useState(qty);
  !error && count > product.countInStock && setCount(product.countInStock);

  console.log("PRODUcT", product._id);

  return (
    <div className="add-to-cart">
      <div className="qty">
        <div className="buttons">
          <Button
            className="buttons-btn"
            aria-label="reduce"
            onClick={() => {
              setCount(Math.max(count - 1, 0));
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
            }}
          >
            <AddIcon fontSize="small" />
          </Button>
        </div>
      </div>
      <AddToCartButton
        id={product._id}
        qty={count}
        disabled={product.countInStock === 0}
      />
    </div>
  );
};

export default AddToCart;
