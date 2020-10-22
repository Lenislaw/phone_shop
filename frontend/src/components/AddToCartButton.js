import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { useDispatch } from "react-redux";
import { addToCart } from "../actions/cartActions";

const ColorButton = withStyles((theme) => ({
  root: {
    color: "white",
    backgroundColor: "#19888d",
    "&:hover": {
      backgroundColor: "#115f62",
    },
  },
}))(Button);

const useStyles = makeStyles((theme) => ({
  button: {
    margin: "1rem auto",
    display: "block",
    width: "180px",
  },
}));

const addToCartButton = ({ id, qty = 1, disabled }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(addToCart(id, qty));
  };

  return (
    <div>
      <ColorButton
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={addToCartHandler}
        disabled={disabled}
      >
        Add To Cart
      </ColorButton>
    </div>
  );
};
export default addToCartButton;
