import React from "react";
import {
  createMuiTheme,
  withStyles,
  makeStyles,
} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

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
  },
}));

export default function CustomizedButtons() {
  const classes = useStyles();

  return (
    <div>
      <ColorButton
        variant="contained"
        color="primary"
        className={classes.button}
      >
        Add To Cart
      </ColorButton>
    </div>
  );
}
