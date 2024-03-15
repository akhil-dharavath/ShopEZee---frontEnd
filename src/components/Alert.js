import * as React from "react";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
// import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";

export default function ShowAlert({
  data,
  loginFailed,
  setLoginFailed,
  alert,
}) {
  const [open, setOpen] = React.useState(loginFailed);

  return (
    <Box sx={{ position: "absolute", top: 40, right: 30 }}>
      <Collapse in={open}>
        <Alert
          severity={alert}
          variant="filled"
          action={
            <IconButton
              sx={{ width: "auto" }}
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
                setLoginFailed();
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          {data}
        </Alert>
      </Collapse>
    </Box>
  );
}
