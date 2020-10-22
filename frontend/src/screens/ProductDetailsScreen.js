import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../components/Spinner";
import RatingRead from "../components/RatingRead";
import AlertMessage from "../components/AlertMessage";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import AddToCart from "../components/AddToCart";

import { listProductDetails } from "../actions/productActions";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    "& > *": {
      marginBottom: theme.spacing(2),
    },
    "& .MuiBadge-root": {
      marginRight: theme.spacing(4),
    },
  },
  button: {
    background: "#19888d",
    "&:hover": {
      backgroundColor: "#469fa3",
    },
  },
}));

const ProductDetailsScreen = ({ match, history }) => {
  const dispatch = useDispatch();

  const classes = useStyles();

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  const [count, setCount] = useState(1);
  !error && count > product.countInStock && setCount(product.countInStock);

  useEffect(() => {
    dispatch(listProductDetails(match.params.id));
  }, [dispatch, match]);

  const goBack = () => {
    history.goBack();
  };

  return (
    <>
      <Button className={classes.button} onClick={goBack}>
        go back
      </Button>
      {loading ? (
        <Spinner />
      ) : error ? (
        <AlertMessage type="error" />
      ) : (
        <div className="product-details">
          <h3 className="product-details-heading">{product.name}</h3>
          <div className="box">
            <div className="image">
              <img
                src="/apple-iphone-11-dual-esim-64gb-4gb-ram-black.jpg"
                alt="iphone"
              />
            </div>
            <div className="description">
              <p>{product.description}</p>
            </div>
            <div className="rating">
              <RatingRead
                rate={product.rating}
                type={"read"}
                text={`(${product.numReviews} reviews)`}
                n
              />
            </div>
            <div className="buy-panel">
              <div className="price">{product.price} $</div>
              <div className="stock">
                availability:
                {product.countInStock > 0 ? (
                  product.countInStock > 5 ? (
                    <h4 className="green">In Stock</h4>
                  ) : (
                    <h4 className="orange">
                      Last items ({product.countInStock})
                    </h4>
                  )
                ) : (
                  <h4 className="red">Out Of Stock</h4>
                )}
              </div>

              <AddToCart error={error} product={product} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetailsScreen;
