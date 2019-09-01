import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: "center",

    position: "absolute"
  },
  chip: {
    margin: theme.spacing(1)
  }
}));

export default function Chips({ location, id }) {
  const classes = useStyles();
  return (
    <Chip
      avatar={<Avatar>{id}</Avatar>}
      label={location}
      className={classes.chip}
    />
  );
}
