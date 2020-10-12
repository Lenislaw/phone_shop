import React from 'react';
import { withStyles, makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { deepOrange } from '@material-ui/core/colors';

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
    '&:hover': {
      backgroundColor: deepOrange[700],
    },
  },
}))(Button);

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(2),
  },
}));


const customButton = () => {
  const classes = useStyles();

  return (
    <div>
      <ColorButton variant="contained" className={classes.margin}>
        VIEW
      </ColorButton>
     
    </div>
  );
}

export default customButton