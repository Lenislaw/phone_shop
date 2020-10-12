import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { deepOrange } from '@material-ui/core/colors';
import CustomButton from "./CustomButton";

const useStyles = makeStyles((theme) => ({
  item: {
    position: "relative",
  
  },
  image: {
    width: "100%",
    margin: "0",
  },
  heading: {
    position: "absolute",
    top: "25%",
    left: "10%",
    color: deepOrange[500],
  },
  headingTitle: {
    color: "inherit",
  },
}));

const Banner = ({ xs, md, img, slogan, paragraf, link }) => {
  const classes = useStyles();
  return (
    <Grid item xs={xs} md={md} className={classes.item}>
      <img className={classes.image} src={img} alt="Banner" />
      <div className={classes.heading}>
        <h2 className={classes.headingTitle}>{slogan}</h2>
        <p>{paragraf}</p>
        <Link to={link}>
          <CustomButton />
        </Link>
      </div>
    </Grid>
  );
};

export default Banner;
