import React, { useState } from "react";
import QueriesCard from "../../components/QueriesCard";
import ContactForm from "../../components/ContactForm";

const ContactUs = ({ handleContactUs }) => {
  const [data, setData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleContactUs(data);
    setData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="Contact">
      <div className="heading right-nav" />
      <div className="queries mt-5">
        <h4>Have any queries?</h4>
        <h1>We're here to help.</h1>
        <p className="separetor" />
      </div>
      <div className="querycards mb-5">
        <QueriesCard
          title="Sales"
          description="Vestibulum ante ipsum primis in faucibus orci luctus."
          contact="1800 123 4567"
        />
        <QueriesCard
          title="Complaints"
          description="Vestibulum ante ipsum primis in faucibus orci luctus."
          contact="1900 223 8899"
        />
        <QueriesCard
          title="Returns"
          description="Vestibulum ante ipsum primis in faucibus orci luctus."
          contact="returns@mail.com"
        />
        <QueriesCard
          title="Marketing"
          description="Vestibulum ante ipsum primis in faucibus orci luctus."
          contact="1700 444 5578"
        />
      </div>
      <ContactForm
        data={data}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default ContactUs;
