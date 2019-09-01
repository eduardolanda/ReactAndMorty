import React from "react";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";

export default function ChagePage({ changePage }) {
  const [open] = React.useState(true);

  return (
    <div>
      <Snackbar
        style={{ color: "white" }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center"
        }}
        open={open}
        autoHideDuration={6000}
        ContentProps={{
          "aria-describedby": "message-id"
        }}
        action={[
          <Button
            key="Back"
            style={{ color: "white" }}
            size="small"
            value="Back"
            onClick={changePage}
          >
            Back
          </Button>,
          <Button
            key="Next"
            style={{ color: "white" }}
            size="small"
            value="Next"
            onClick={changePage}
          >
            Next
          </Button>
        ]}
      />
    </div>
  );
}
