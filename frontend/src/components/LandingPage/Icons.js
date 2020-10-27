import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { deepOrange } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "3rem",
    flexGrow: 1,
    padding: "3rem",
  },
  item: {
    textAlign: "center",
    color: deepOrange[300],
    fontWeight: "bold",
  },
}));

const Icons = () => {
  const classes = useStyles();

  const icons = [
    { index: 1, icon: "fas fa-box-open fa-4x", description: "safe package" },
    { index: 2, icon: "fas fa-truck fa-4x", description: "fast delivery" },
    {
      index: 3,
      icon: "fas fa-smile fa-4x",
      description: "satisfaction guaranteed",
    },
    {
      index: 4,
      icon: "fas fa-file-medical-alt fa-4x",
      description: "24 months warranty",
    },
  ];
  return (
    <div className="icons">
      <Grid container className={classes.root} spacing={2}>
        {icons.map((icon) => (
          <Grid
            key={icon.index}
            item
            xs={12}
            sm={6}
            md={6}
            lg={3}
            className={classes.item}
          >
            <i className={icon.icon}></i>
            <p>{icon.description.toUpperCase()}</p>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Icons;
