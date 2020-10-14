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
});

const UserButton = ({ anchor, icon, items }) => {
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
            {icon === "products" && (
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
          <Divider />
          <List>
            {items.map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  <Link to={`/products/${text}`}>
                    <Details />
                  </Link>
                </ListItemIcon>
                <Link to={`/products/${text}`}>
                  <ListItemText primary={text} />
                </Link>
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
          {icon === "cart" && (
            <Badge badgeContent={1} color="error">
              <ShoppingCart />
            </Badge>
          )}
          {icon === "profile" && <AccountCircle />}
          {icon === "products" && <PhoneAndroid />}
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
