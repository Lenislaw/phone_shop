import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  footer: {
    color: "white",
    backgroundColor: "#19888D",
  },
  item: {
    padding: theme.spacing(2),
    textAlign: "center",
  },
  list: {
    listStyle: "none",
  },
  listItem: {
    cursor: "pointer",
    border: "1px solid red",
    color: "white",
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} lg={4} className={classes.item}>
            <ul className={classes.list}>
              <Link to="/contact">
                <li className={classes.listItem}>1</li>
              </Link>
              <Link to="/contact">
                <li className={classes.listItem}>1</li>
              </Link>{" "}
              <Link to="/contact">
                <li className={classes.listItem}>1</li>
              </Link>
            </ul>
          </Grid>
          <Grid item xs={12} lg={4} className={classes.item}>
            <ul className={classes.list}>
              <Link to="/contact">
                <li className={classes.listItem}>1</li>
              </Link>{" "}
              <Link to="/contact">
                <li className={classes.listItem}>1</li>
              </Link>{" "}
              <Link to="/contact">
                <li className={classes.listItem}>1</li>
              </Link>
            </ul>
          </Grid>
          <Grid item xs={12} lg={4} className={classes.item}>
            <ul className={classes.list}>
              <Link to="/contact">
                <li className={classes.listItem}>1</li>
              </Link>{" "}
              <Link to="/contact">
                <li className={classes.listItem}>1</li>
              </Link>{" "}
              <Link to="/contact">
                <li className={classes.listItem}>1</li>
              </Link>
            </ul>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
