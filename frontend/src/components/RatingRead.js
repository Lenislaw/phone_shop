import React, { useState } from "react";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const RatingRead = ({ rate, type = "read", text }) => {
  const [value, setValue] = useState(rate);

  return (
    <>
      {type === "change" && (
        <Box
          component="fieldset"
          mb={3}
          borderColor="transparent"
          className="rating-box"
        >
          <Typography component="legend">Leave your rate!</Typography>
          <Rating
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
        </Box>
      )}
      {type === "read" && (
        <Box
          component="fieldset"
          mb={3}
          borderColor="transparent"
          className="rating-box"
        >
          <span className="title">Product rate's by users!</span>
          <Rating className="rating" name="read-only" value={value} readOnly />
          <span className="text">{text && text}</span>
        </Box>
      )}
    </>
  );
};

export default RatingRead;
