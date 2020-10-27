import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, ListGroup, Button as ButtonB, Form } from "react-bootstrap";
import Spinner from "../components/Spinner";
import RatingRead from "../components/RatingRead";
import AlertMessage from "../components/AlertMessage";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import AddToCart from "../components/AddToCart";
import Rating from "../components/Rating";

import {
  listProductDetails,
  createProductReview,
} from "../actions/productActions";

import { PRODUCT_CREATE_REVIEW_RESET } from "../constants/productConstants";

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

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  const productReviewCreate = useSelector((state) => state.productReviewCreate);
  const {
    success: successProductReview,
    error: errorProductReview,
  } = productReviewCreate;

  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [count, setCount] = useState(1);
  !error && count > product.countInStock && setCount(product.countInStock);

  useEffect(() => {
    if (successProductReview) {
      setRating(0);
      setComment("");
      dispatch({ type: PRODUCT_CREATE_REVIEW_RESET });
    }
    dispatch(listProductDetails(match.params.id));
  }, [dispatch, match, successProductReview]);

  const goBack = () => {
    history.goBack();
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      createProductReview(match.params.id, {
        rating,
        comment,
      })
    );
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
              <img src={product.image} alt={product.name} />
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

            <Row>
              <Col md={6}>
                <h2>Reviews</h2>
                {product.reviews.length === 0 && <h5>No Reviews</h5>}
                <ListGroup variant="flush">
                  {product.reviews.map((review) => (
                    <ListGroup.Item key={review._id}>
                      <strong>{review.name}</strong>
                      <Rating value={review.rating} />
                      <p>{review.createdAt.substring(0, 10)}</p>
                      <p>{review.comment}</p>
                    </ListGroup.Item>
                  ))}
                  <ListGroup.Item>
                    <h2>Write a Customer Review</h2>
                    {errorProductReview && (
                      <AlertMessage type={error} text={errorProductReview} />
                    )}
                    {userInfo ? (
                      <Form onSubmit={submitHandler}>
                        <Form.Group controlId="rating">
                          <Form.Label>Rating</Form.Label>
                          <Form.Control
                            as="select"
                            value={rating}
                            onChange={(e) => setRating(e.target.value)}
                          >
                            <option value="">Select...</option>
                            <option value="1">1 - Poor</option>
                            <option value="2">2 - Fair</option>
                            <option value="3">3 - Good</option>
                            <option value="4">4 - Very Good</option>
                            <option value="5">5 - Excellent</option>
                          </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="comment">
                          <Form.Label>Comment</Form.Label>
                          <Form.Control
                            as="textarea"
                            row="3"
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                          ></Form.Control>
                        </Form.Group>
                        <ButtonB type="submit" variant="primary">
                          Submit
                        </ButtonB>
                      </Form>
                    ) : (
                      <div>
                        Please <Link to="/user/login">sign in</Link> to write a
                        review{" "}
                      </div>
                    )}
                  </ListGroup.Item>
                </ListGroup>
              </Col>
            </Row>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetailsScreen;
