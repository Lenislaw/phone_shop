import React, { useState } from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  IconButton,
  Badge,
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  SwipeableDrawer,
} from "@material-ui/core";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import {
  AccountCircle,
  ShoppingCart,
  PhoneAndroid,
  Details,
} from "@material-ui/icons";
import { deepOrange } from "@material-ui/core/colors";

const useStyles = makeStyles({
  list: {
    width: 300,
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

const UserButton = ({ anchor, type, items }) => {
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
            {type === "user" && (
              <h5 className={classes.title}>Login / Register</h5>
            )}
          </List>
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
                  {type === "user" && (
                    <Link to={`/user/${button.name}`}>
                      <i className={`${button.icon}`}></i>
                    </Link>
                  )}
                </ListItemIcon>
                {type === "products" && (
                  <Link to={`/products/brand/${button.name}`}>
                    <ListItemText primary={button.name} />
                  </Link>
                )}

                {type === "user" && (
                  <Link to={`/user/${button.name}`}>{button.name}</Link>
                )}
              </ListItem>
            ))}
          </List>
        </div>
      )}
      {anchor === "right" && (
        <div
          className={clsx(classes.list, {
            [classes.fullList]: anchor === "top" || anchor === "bottom",
          })}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
          <List>
            {items.map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {items.map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
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
          {type === "cart" && (
            <Badge badgeContent={1} color="error">
              <ShoppingCart />
            </Badge>
          )}
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
