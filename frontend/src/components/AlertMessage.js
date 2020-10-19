import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

const AlertMessage = ({ type, text = "Something went wrong!" }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Alert severity={type}>{text}</Alert>
    </div>
  );
};

export default AlertMessage;
