import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import Logo from "./Logo";

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

  // rest nav

  const onClick = () => {
    console.log("Click");
  };

  return (
    <header>
      <div className={classes.root}>
        <AppBar position="static" className={classes.appbar}>
          <Toolbar className={classes.toolbar}>
            <Logo />
            <div className={classes.userButtons}>
              <UserButton
                anchor={"left"}
                icon={"products"}
                items={["sony", "apple", "huawei", "samsung"]}
              />
              <UserButton
                anchor={"left"}
                icon={"profile"}
                items={["name", "email", "alal"]}
              />
              <UserButton
                anchor={"right"}
                icon={"cart"}
                items={["cart item"]}
              />
            </div>
            <SearchBar />
          </Toolbar>
        </AppBar>
      </div>
    </header>
  );
};
export default Navbar;
