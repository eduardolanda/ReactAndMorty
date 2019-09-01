import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Popover from "@material-ui/core/Popover";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";

//component
import Chips from "./Chips";

const useStyles = makeStyles(theme => ({
  typography: {
    margin: theme.spacing(2)
  },
  playIcon: {
    height: 38,
    width: 38
  }
}));

export default function Play({ location, id, gender }) {
  const classes = useStyles();

  return (
    <PopupState variant="popover" popupId="demo-popup-popover">
      {popupState => (
        <div>
          <PlayArrowIcon
            variant="contained"
            {...bindTrigger(popupState)}
            className={classes.playIcon}
          />

          <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center"
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center"
            }}
          >
            <Chips location={location} id={id} gender={gender} />
          </Popover>
        </div>
      )}
    </PopupState>
  );
}
