import React, { useState } from "react";
import { InputBase } from "@material-ui/core";
import { fade, makeStyles } from "@material-ui/core/styles";
import { Search } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  search: {
    marginLeft: "auto",
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },

    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "16ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const SearchBar = ({ history }) => {
  const classes = useStyles();
  const [keyword, setKeyword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/search/${keyword}`);
    } else {
      history.push("/productNotFound");
    }
  };
  return (
    <form className={classes.search} onSubmit={submitHandler}>
      <div className={classes.searchIcon}>
        <Search>
          <button className="search-btn" type="submit"></button>
        </Search>
      </div>
      <InputBase
        placeholder="Search Product…"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ "aria-label": "search" }}
        onChange={(e) => setKeyword(e.target.value)}
      ></InputBase>
    </form>
  );
};

export default SearchBar;
