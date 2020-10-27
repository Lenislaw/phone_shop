import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  footer: {
    color: "white",
    backgroundColor: "#19888D",
    marginTop:"3rem",
  },
  item: {
    padding: theme.spacing(2),
    textAlign: "center",
  },
  list: {
    listStyle: "none",
  },
  listSocial: {
    display: "flex",
    flexDirection: "row",
    listStyle: "none",
    justifyContent: "space-around",
    maxWidth: "300px",
    margin: "0 auto",
  },
  listSocialItem: {
    color: "white",
  },
  listItem: {
    cursor: "pointer",
    color: "white",
    width: "250px",
    margin: "0 auto",
    "&:hover": {
      borderBottom: "1px solid white",
    },
  },
  description: {
    padding: "1rem",
    textAlign: "center",
  },
}));

const Footer = () => {
  const classes = useStyles();
  const currentYear = new Date().getFullYear();
  return (
    <footer className={classes.footer}>
      {/* <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} lg={4} className={classes.item}>
            <h3>About Us</h3>
            <ul className={classes.list}>
              <Link to="/about-company">
                <li className={classes.listItem}>About the company</li>
              </Link>
              <Link to="/contact">
                <li className={classes.listItem}>Contact</li>
              </Link>
              <Link to="/Career">
                <li className={classes.listItem}>Career</li>
              </Link>
            </ul>
          </Grid>
          <Grid item xs={12} lg={4} className={classes.item}>
            <h3>Socials</h3>
            <ul className={classes.listSocial}>
              <a
                href="http://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <li className={classes.listSocialItem}>
                  <i className="fab fa-facebook fa-4x social"></i>
                </li>
              </a>
              <a
                href="http://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <li className={classes.listSocialItem}>
                  <i className="fab fa-twitter fa-4x social"></i>
                </li>
              </a>{" "}
              <a
                href="http://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <li className={classes.listSocialItem}>
                  <i className="fab fa-instagram fa-4x social"></i>
                </li>
              </a>{" "}
            </ul>
          </Grid>
          <Grid item xs={12} lg={4} className={classes.item}>
            <h3>Assistance</h3>
            <ul className={classes.list}>
              <Link to="/how-to-buy">
                <li className={classes.listItem}>How To Buy</li>
              </Link>{" "}
              <Link to="/shipping">
                <li className={classes.listItem}>Shipping</li>
              </Link>{" "}
              <Link to="/faq">
                <li className={classes.listItem}>FAQ</li>
              </Link>
              <Link to="/warranty">
                <li className={classes.listItem}>Warranty</li>
              </Link>
              <Link to="/cancelations-and-returnings">
                <li className={classes.listItem}>
                  Cancelations and Returnings
                </li>
              </Link>
            </ul>
          </Grid>
        </Grid>
      </Container> */}
      <div className={classes.description}>
        <p>
          Site created by{" "}
          <a
            href="https://github.com/Lenislaw"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "white" }}
          >
            Lenislaw
          </a>
          . {currentYear}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
