import React from "react";
import { Link } from "react-router-dom";
import AddToCartButton from "./AddToCartButton";

const product = ({ product }) => {
  return (
    <div className="product">
      <Link to={`/product/${product._id}`}>
        <img className="product-image" src={product.image} alt={product.name} />
        <h4 className="product-name">{product.name}</h4>
      </Link>
      <div className="product-cart">
        <h3 className="product-price">{product.price} $</h3>
        <AddToCartButton
          id={product._id}
          disabled={product.countInStock === 0}
        />
      </div>
    </div>
  );
};

export default product;
