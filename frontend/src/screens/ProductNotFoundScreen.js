import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const ProductNotFoundScreen = () => {
  return (
    <div>
      <h4>Sorry, Product not Found</h4>

      <Link to="/">
        <Button className="custom-btn" style={{ background: "#19888d" }}>
          Back to Home Page
        </Button>
      </Link>
    </div>
  );
};

export default ProductNotFoundScreen;
