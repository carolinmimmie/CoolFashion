import React from "react";
import ContactForm from "./ContactForm";
import CustomerForm from "./CustomerForm";

const Forms = () => {
  return (
    <div className="form-component-container">
      <ContactForm></ContactForm>
      <CustomerForm></CustomerForm>
    </div>
  );
};

export default Forms;
