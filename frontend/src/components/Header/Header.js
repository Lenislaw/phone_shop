import React from "react";
import { useSelector } from "react-redux";
import { Link, Route } from "react-router-dom";
import { AppBar, Badge, Toolbar } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import Logo from "./Logo";

import { ShoppingCart } from "@material-ui/icons";

import UserButton from "./UserButton";
import SearchBar from "./SearchBar";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: "fixed",
    width: "100vw",
    zIndex: "3",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },

  toolbar: {
    maxWidth: "1100px",
    width: "100%",
    margin: "0 auto",
    display: "flex",
    flexDirection: "row",
  },
  userButtons: {
    display: "flex",
    flexDirection: "row",
    float: "right",
    marginLeft: "auto",
  },

  appbar: {
    backgroundColor: "#19888D",
  },
}));

const Navbar = () => {
  const classes = useStyles();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  const userCart = useSelector((state) => state.cart);
  const { cartItems } = userCart;

  const countItemsInCart = cartItems.length;
  console.log(typeof countItemsInCart);
  // rest nav

  const onClick = () => {
    console.log("Click");
  };

  return (
    <header>
      <div className={classes.root}>
        <AppBar position="static" className={classes.appbar}>
          <Toolbar className={classes.toolbar}>
            <Link to="/">
              <Logo />
            </Link>
            <div className={classes.userButtons}>
              <UserButton
                anchor={"left"}
                type={"products"}
                items={[
                  { name: "Apple", icon: "" },
                  { name: "Huawei", icon: "" },
                  { name: "Samsung", icon: "" },
                  { name: "Xiaomi", icon: "" },
                ]}
              />
              {userInfo ? (
                <UserButton
                  anchor={"left"}
                  type={"user"}
                  items={[
                    { name: "profile", icon: "fas fa-user-alt", link: true },
                    { name: "orders", icon: "fas fa-box", link: true },
                    {
                      name: "logout",
                      icon: "fas fa-sign-out-alt",
                      link: false,
                      usage: onClick,
                    },
                  ]}
                  title="Your Account"
                />
              ) : (
                <UserButton
                  anchor={"left"}
                  type={"user"}
                  items={[
                    { name: "login", icon: "fas fa-sign-in-alt" },
                    { name: "register", icon: "fas fa-user-plus" },
                  ]}
                  title="Login/Register"
                />
              )}
              <Link className="cart-icon" to="/cart">
                <Badge badgeContent={countItemsInCart} color="error">
                  <ShoppingCart />
                </Badge>
              </Link>
            </div>
            <Route render={({ history }) => <SearchBar history={history} />} />
          </Toolbar>
        </AppBar>
      </div>
    </header>
  );
};
export default Navbar;
