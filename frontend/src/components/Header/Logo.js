import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
    display: "none",
    maxWidth: "80px",
    maxHeight: "70px",
    cursor: "pointer",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  img: {
    maxWidth: "100%",
  },
}));

const Logo = () => {
  const classes = useStyles();
  return (
    <Typography className={classes.title} variant="h6" noWrap>
      <img className={classes.img} src="./king-logo.png" alt="Logo" />
    </Typography>
  );
};

export default Logo;
