import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const ProfileDialog = ({
  title,
  details,
  setDetails,
  textfields,
  selects,
  buttons,
  open,
  content,
}) => {
  //   console.log(title, details, textfields, selects, buttons, open);

  return (
    <Dialog
      fullWidth
      maxWidth="sm"
      open={open}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        {textfields &&
          textfields.map((textfield) => (
            <div className="mb-3" key={textfield.id}>
              <label htmlFor="title" className="form-label m-0">
                {textfield.label}
              </label>
              <TextField
                fullWidth
                hiddenLabel
                size="small"
                name={textfield.label}
                id="title"
                value={details ? details.label : ""}
                placeholder={textfield.placeholder}
                onChange={(e) =>
                  setDetails({ ...details, [e.target.name]: e.target.value })
                }
              />
            </div>
          ))}
        {selects &&
          selects.map((select) => (
            <div className="mb-3" key={select.id}>
              <label className="form-label m-0 d-block">{select.label}</label>
              <Select
                name={select.label}
                defaultValue={0}
                size="small"
                onChange={(e) =>
                  setDetails({ ...details, [e.target.name]: e.target.value })
                }
              >
                {select.options.map((val) => (
                  <MenuItem
                    value={val.key}
                    key={val.key}
                    // disabled={true && index === 0}
                  >
                    {val.value}
                  </MenuItem>
                ))}
              </Select>
            </div>
          ))}
        {content && <Typography>{content}</Typography>}
      </DialogContent>
      <DialogActions className="mx-3 mb-3">
        {buttons.map((button) => (
          <Button
            key={button.id}
            variant="contained"
            color={button.color}
            onClick={() => button.click(details)}
          >
            {title === "Log out" && button.name === "yes" ? (
              <Link to="/auth/login" style={{ width: "auto", height: "auto" }}>
                {button.name}
              </Link>
            ) : (
              button.name
            )}
          </Button>
        ))}
      </DialogActions>
    </Dialog>
  );
};

export default ProfileDialog;
