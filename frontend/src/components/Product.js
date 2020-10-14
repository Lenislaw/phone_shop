import React from "react";
import { Link } from "react-router-dom";
import AddToCartButton from "./AddToCartButton";

const product = ({ product }) => {
  return (
    <div className="product">
      <Link to={`/product/${product._id}`}>
        <img
          className="product-image"
          src="/apple-iphone-11-dual-esim-64gb-4gb-ram-black.jpg"
          alt="img"
        />
        <h4 className="product-name">{product.name}</h4>
      </Link>
      <h3 className="product-price">{product.price} $</h3>
      <AddToCartButton />
    </div>
  );
};

export default product;
