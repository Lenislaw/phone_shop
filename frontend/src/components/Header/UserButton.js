import React, { useState } from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  IconButton,
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  SwipeableDrawer,
} from "@material-ui/core";
import {
  AccountCircle,
  ShoppingCart,
  PhoneAndroid,
  Details,
} from "@material-ui/icons";
import { deepOrange } from "@material-ui/core/colors";
import CartItem from "../CartItem";
import Logout from "../../components/Logout";

const useStyles = makeStyles({
  list: {
    width: 300,
  },
  icon: {
    padding: "1rem",
  },
  fullList: {
    width: "auto",
  },
  menuButton: {
    margin: "0 0.1rem",
  },
  badge: {
    backgroundColor: deepOrange[500],
  },
  title: { textAlign: "center" },
});

const UserButton = ({ anchor, type, items, title, countItemsInCart }) => {
  const classes = useStyles();

  const [state, setState] = useState({
    left: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <>
      {anchor === "left" && (
        <div
          className={clsx(classes.list, {
            [classes.fullList]: anchor === "top" || anchor === "bottom",
          })}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
          <List>
            {type === "products" && (
              <>
                <ListItem button>
                  <ListItemIcon>
                    <Link to="/products">
                      <i className="fas fa-mobile-alt fa-4x"></i>
                    </Link>
                  </ListItemIcon>
                  <Link to="/products">
                    <ListItemText primary="Our Products" />
                  </Link>
                </ListItem>
              </>
            )}
          </List>
          {type === "user" && <h5 className={classes.title}>{title}</h5>}
          {type === "admin" && <h5 className={classes.title}>{title}</h5>}
          <Divider />
          <List>
            {items.map((button, index) => (
              <ListItem button key={button.name}>
                <ListItemIcon>
                  {type === "products" && (
                    <Link to={`/products/brand/${button.name}`}>
                      <Details />
                    </Link>
                  )}
                  {type === "user" &&
                    (button.name === "logout" ? (
                      <Logout type="icon" />
                    ) : (
                      <Link to={`/user/${button.name}`}>
                        <i className={`${button.icon}`}></i>
                      </Link>
                    ))}
                  {type === "admin" &&
                    (button.name === "logout" ? (
                      <Logout type="icon" />
                    ) : (
                      <Link to={`/admin/${button.name}`}>
                        <i className={`${button.icon}`}></i>
                      </Link>
                    ))}
                </ListItemIcon>
                {type === "products" && (
                  <Link to={`/products/brand/${button.name}`}>
                    <ListItemText primary={button.name} />
                  </Link>
                )}

                {type === "user" &&
                  (button.name === "logout" ? (
                    <Logout type="text" />
                  ) : (
                    <Link to={`/user/${button.name}`}>{button.name}</Link>
                  ))}
                {type === "admin" &&
                  (button.name === "logout" ? (
                    <Logout type="text" />
                  ) : (
                    <Link to={`/admin/${button.name}`}>{button.name}</Link>
                  ))}
              </ListItem>
            ))}
          </List>
          <Divider />
        </div>
      )}
    </>
  );

  return (
    <div>
      <React.Fragment key={anchor}>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="open drawer"
          onClick={toggleDrawer(anchor, true)}
        >
          {type === "admin" && <AccountCircle />}
          {type === "user" && <AccountCircle />}
          {type === "products" && <PhoneAndroid />}
        </IconButton>

        <SwipeableDrawer
          anchor={anchor}
          open={state[anchor]}
          onClose={toggleDrawer(anchor, false)}
          onOpen={toggleDrawer(anchor, true)}
        >
          {list(anchor)}
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
};

export default UserButton;
