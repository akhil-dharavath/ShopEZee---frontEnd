// import {
//   Button,
//   Dialog,
//   DialogActions,
//   DialogContent,
//   DialogTitle,
//   MenuItem,
//   Select,
//   TextField,
//   Typography,
// } from "@mui/material";
// import React from "react";
// import { Link } from "react-router-dom";

// const ProfileDialog = ({
//   title,
//   details,
//   setDetails,
//   textfields,
//   selects,
//   buttons,
//   open,
//   content,
// }) => {
//   //   console.log(title, details, textfields, selects, buttons, open);
//   const handleInput = (e) => {
//     setDetails({ ...details, [e.target.name]: e.target.value });
//   };

//   return (
//     <Dialog
//       fullWidth
//       maxWidth="sm"
//       open={open}
//       aria-labelledby="responsive-dialog-title"
//     >
//       <DialogTitle>{title}</DialogTitle>
//       <DialogContent>
//         {textfields &&
//           textfields.map((textfield) => (
//             <div className="mb-3" key={textfield.id}>
//               <label htmlFor="title" className="form-label m-0">
//                 {textfield.label}
//               </label>
//               <TextField
//                 fullWidth
//                 hiddenLabel
//                 size="small"
//                 name={textfield.label}
//                 id="title"
//                 value={details ? details.label : ""}
//                 placeholder={textfield.placeholder}
//                 onChange={(e) =>
//                   setDetails({ ...details, [e.target.name]: e.target.value })
//                 }
//                 value={details.label}
//                 placeholder={textfield.placeholder}
//                 onChange={(e) => handleInput(e)}
//               />
//             </div>
//           ))}
//         {selects &&
//           selects.map((select) => (
//             <div className="mb-3" key={select.id}>
//               <label className="form-label m-0 d-block">{select.label}</label>
//               <Select
//                 name={select.label}
//                 defaultValue={0}
//                 size="small"
//                 onChange={(e) =>
//                   setDetails({ ...details, [e.target.name]: e.target.value })
//                 }
//               >
//                 {select.options.map((val) => (
//                   <MenuItem
//                     value={val.key}
//                     key={val.key}
//                     // disabled={true && index === 0}
//                   >
//                     {val.value}
//               <Select name="category" defaultValue={0} size="small">
//                 {select.options.map((value, index) => (
//                   <MenuItem
//                     value={value.key}
//                     key={value.key}
//                     disabled={true && index === 0}
//                   >
//                     {value.value}
//                   </MenuItem>
//                 ))}
//               </Select>
//             </MenuItem>
//           ))}
//         {content && <Typography>{content}</Typography>}
//         </Select>
//         </div>
//       </DialogContent>
//       <DialogActions className="mx-3 mb-3">
//         {buttons.map((button) => (
//           <Button
//             key={button.id}
//             variant="contained"
//             color={button.color}
//             onClick={() => button.click(details)}
//           >
//             {title === "Log out" && button.name === "yes" ? (
//               <Link to="/auth/login" style={{ width: "auto", height: "auto" }}>
//                 {button.name}
//               </Link>
//             ) : (
//               button.name
//             )}
//             onClick={() => button.click()}
//           {/* > */}
//             {button.name}
//           </Button>
//         ))}
//       </DialogActions>
//       ))}
//     </Dialog>
//   );
// };

// export default ProfileDialog;

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
  const handleInput = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

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
        {selects &&
          selects.map((select) => (
            <div className="mb-3" key={select.id}>
              <label className="form-label m-0 d-block">{select.label}</label>
              <Select
                name={select.label}
                value={details[select.label] || ""}
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
        {content && <Typography>{content}</Typography>}
      </DialogContent>
      <DialogActions className="mx-3 mb-3">
        {buttons.map((button) => (
          <Button
            key={button.id}
            variant="contained"
            color={button.color}
            onClick={() =>
              button.click && button.click(details) // Ensure click function exists
            }
          >
            {title === "Log out" && button.name === "yes" ? (
              <Link to="/auth/login" style={{ textDecoration: "none" }}>
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
