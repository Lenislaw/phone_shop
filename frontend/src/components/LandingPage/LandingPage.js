import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Carousel from "./Carousel";
import ProductCarousel from "./ProductCarousel";
import Icons from "./Icons";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: "1100px",
    margin: "0 auto",
    zIndex: "2",
  },
}));

const LandingPage = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Carousel />
      <Icons />
      <ProductCarousel />
    </div>
  );
};

export default LandingPage;
