import React, { useState } from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import AlertMessage from "../components/AlertMessage";

import { useDispatch, useSelector } from "react-redux";
import { updateUserProfile } from "../actions/userActions";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: "auto",
    margin: "3rem auto",
  },
  appBar: {
    color: "red",
  },
}));

const FullWidthTabs = ({ user, location, history }) => {
  const dispatch = useDispatch();

  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = useState(0);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
    } else {
      dispatch(updateUserProfile({ id: user._id, name, email, password }));
    }
  };

  const showPasswordHandler = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };
  const showConfirmPasswordHandler = (e) => {
    e.preventDefault();
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <>
      {message && <AlertMessage type="warning" text={message} />}
      <div className={classes.root}>
        <AppBar position="static" color="default" className={classes.appBar}>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            aria-label="full width tabs example"
          >
            <Tab label="Profile" {...a11yProps(0)} />
            <Tab label="Shipping" {...a11yProps(1)} />
            <Tab label="Orders" {...a11yProps(2)} />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            <>
              <div className="profile">
                <div className="profile-item">
                  <div className="profile-item-box">
                    <form className="form" onSubmit={submitHandler}>
                      <div className="form-group">
                        <input
                          className="form-group-input"
                          type="name"
                          value={name}
                          //ref={nameRef}
                          required
                          autoComplete="true"
                          onChange={(e) => setName(e.target.value)}
                        ></input>
                        <label htmlFor="name" className="form-group-label">
                          <span className="content">
                            <i className="fas fa-user"></i> Name
                          </span>
                        </label>
                      </div>

                      <div className="form-group">
                        <input
                          className="form-group-input"
                          type="emailAddress"
                          value={email}
                          //ref={emailRef}
                          required
                          onChange={(e) => setEmail(e.target.value)}
                        ></input>
                        <label
                          htmlFor="emailAddress"
                          className="form-group-label"
                        >
                          <span className="content">
                            <i className="fas fa-user"></i> Email Address
                          </span>
                        </label>
                      </div>

                      <div className="form-group">
                        <input
                          className="form-group-input"
                          type={showPassword ? "text" : "password"}
                          value={password}
                          //ref={passwordRef}
                          required
                          onChange={(e) => setPassword(e.target.value)}
                        ></input>
                        <label htmlFor="password" className="form-group-label">
                          <span className="content">
                            <i className="fas fa-key"></i> Password
                          </span>
                        </label>
                        <button
                          className="btn-eye"
                          onClick={showPasswordHandler}
                        >
                          <i
                            className={
                              showPassword ? "far fa-eye-slash" : "far fa-eye"
                            }
                          ></i>
                        </button>
                      </div>

                      <div className="form-group">
                        <input
                          className="form-group-input"
                          type={showConfirmPassword ? "text" : "password"}
                          value={confirmPassword}
                          required
                          onChange={(e) => setConfirmPassword(e.target.value)}
                        ></input>
                        <label htmlFor="password" className="form-group-label">
                          <span className="content">
                            <i className="fas fa-key"></i> Confirm Password
                          </span>
                        </label>
                        <button
                          className="btn-eye"
                          onClick={showConfirmPasswordHandler}
                        >
                          <i
                            className={
                              showConfirmPassword
                                ? "far fa-eye-slash"
                                : "far fa-eye"
                            }
                          ></i>
                        </button>
                      </div>
                      <button type="submit" className="btn btn-submit">
                        Update Profile
                      </button>
                      {message && (
                        <AlertMessage type="warning" text={message} />
                      )}
                    </form>
                  </div>
                </div>
              </div>
            </>
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            Shipping
          </TabPanel>
          <TabPanel value={value} index={2} dir={theme.direction}>
            Orders
          </TabPanel>
        </SwipeableViews>
      </div>
    </>
  );
};
export default FullWidthTabs;
