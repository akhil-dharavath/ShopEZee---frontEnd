import React from "react";
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
  const handleInput = (e) => {
    e.target.name !== "Email" &&
      setDetails({ ...details, [e.target.name]: e.target.value });
  };

  return (
    <Dialog
      fullWidth
      maxWidth="sm"
      onClose={buttons.length > 0 && buttons[0].click}
      open={open}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        {textfields &&
          textfields.map((textfield) => (
            <div className="mb-3" key={textfield.id}>
              <label className="form-label m-0">{textfield.label}</label>
              <TextField
                fullWidth
                hiddenLabel
                size="small"
                name={textfield.label}
                value={details[textfield.label] || ""}
                placeholder={textfield.placeholder}
                onChange={(e) => handleInput(e)}
              />
            </div>
          ))}
        <div className="row">
          {selects &&
            selects.map((select) => (
              <div className="col-6" key={select.id}>
                <label className="form-label m-0 d-block">{select.label}</label>
                <Select
                  name={select.label}
                  value={details[select.label]}
                  onChange={(e) => handleInput(e)}
                  size="small"
                >
                  {select.options.map((value) => (
                    <MenuItem value={value.key} key={value.key}>
                      {value.value}
                    </MenuItem>
                  ))}
                </Select>
              </div>
            ))}
        </div>
        {content && <Typography>{content}</Typography>}
      </DialogContent>
      <DialogActions className="mx-3 mb-3">
        {buttons.map((button) => (
          <Button
            key={button.id}
            variant="contained"
            color={button.color}
            onClick={
              () => button.click && button.click(details) // Ensure click function exists
            }
          >
            {button.name}
          </Button>
        ))}
      </DialogActions>
    </Dialog>
  );
};

export default ProfileDialog;
