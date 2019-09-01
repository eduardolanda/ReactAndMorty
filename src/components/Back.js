import React from "react";
import Popover from "@material-ui/core/Popover";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";

//component
import Chips from "./Chips";

export default function Play({ status, gender }) {
  return (
    <PopupState variant="popover" popupId="demo-popup-popover">
      {popupState => (
        <div>
          <SkipPreviousIcon variant="contained" {...bindTrigger(popupState)} />

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
            <Chips location={status} id={gender} />
          </Popover>
        </div>
      )}
    </PopupState>
  );
}
