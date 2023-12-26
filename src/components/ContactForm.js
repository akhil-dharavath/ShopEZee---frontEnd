import { Typography } from "@mui/material";
import React from "react";

const ContactForm = ({ data, handleChange, handleSubmit }) => {
  return (
    <div className="form">
      <div className="left">
        <Typography variant="body-2">Don't be a stranger!</Typography>
        <Typography variant="h3">You tell us. We listen.</Typography>
        <Typography variant="body" className="d-block mt-4 text-secondary">
          Cras elementum finibus lacus nec lacinia. Quisque non convallis nisl,
          eu condimentum sem. Proin dignissim libero lacus, ut eleifend magna
          vehicula et. Nam mattis est sed tellus.
        </Typography>
      </div>
      <form className="right">
        <input
          placeholder="Name"
          name="name"
          value={data.name}
          onChange={(e) => handleChange(e)}
        />
        <input
          placeholder="Subject"
          name="subject"
          value={data.subject}
          onChange={(e) => handleChange(e)}
        />
        <input
          placeholder="Email"
          name="email"
          value={data.email}
          onChange={(e) => handleChange(e)}
        />
        <textarea
          placeholder="Message"
          rows={7}
          name="message"
          value={data.message}
          onChange={(e) => handleChange(e)}
        />
        <button
          type="submit"
          className="btn btn-primary"
          onClick={(e) => handleSubmit(e)}
        >
          SEND MESSAGE
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
