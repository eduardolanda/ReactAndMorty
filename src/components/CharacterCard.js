import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";

import Play from "./Play";
import Back from "./Back";
import Next from "./Next";

const useStyles = makeStyles(theme => ({
  card: {
    display: "flex",
    margin: "10px",
    backgroundColor: "#97ce4c"
  },
  details: {
    display: "flex",
    flexDirection: "column"
  },
  content: {
    flex: "1 0 auto"
  },
  cover: {
    minWidth: "150px"
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1)
  }
}));

export default function MediaControlCard({
  name,
  species,
  status,
  image,
  id,
  location,
  gender
}) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Card className={classes.card}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {name}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {species}
          </Typography>
        </CardContent>
        <div className={classes.controls}>
          <IconButton aria-label="previous">
            {theme.direction === "rtl" ? (
              <Next status={gender} gender={id} />
            ) : (
              <Back status={status} gender={id} />
            )}
          </IconButton>

          <Play id={id} gender={gender} location={location} />

          <IconButton aria-label="next">
            {theme.direction === "rtl" ? (
              <Back status={status} gender={id} />
            ) : (
              <Next status={gender} gender={id} />
            )}
          </IconButton>
        </div>
      </div>
      <CardMedia className={classes.cover} image={image} title={name} />
    </Card>
  );
}
