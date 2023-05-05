import React, { useState } from "react";
import { IContactInformation } from "../../interfaces";
import { createContactInformation } from "../../Api";

const ContactForm = () => {
  const [formData, setFormData] = useState<IContactInformation>({
    //Satt mina use-state variablar till tomma som original
    id: "",
    username: "",
    email: "",
    textfield: "",
  });
  //Känner av att något händer i input-fältet
  const handleChange = (event: React.ChangeEvent<HTMLInputElement |HTMLTextAreaElement>) => {
    const { name } = event.target;
    setFormData({ ...formData, [name]: event.target.value });
  };
  //Knappen i form
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    createContactInformation(formData);
  };
  return (
    <div className="container-form">
      <h2>Kontaktformulär</h2>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-box">
          <label htmlFor="username">Namn:</label>
        </div>
        <div className="form-box">
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div className="form-box">
          <label htmlFor="email">Email:</label>
        </div>
        <div className="form-box">
          <input
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-box">
          <label htmlFor="text">Meddelande:</label>
        </div>
        <div className="form-box">
        <textarea
            id="textfield"
            name="textfield"
            maxLength={500}
            rows={10}
            value={formData.textfield}
            onChange={handleChange}
          />
        </div>
        <div className="form-box">
          <button type="submit">Skicka </button>
        </div>
      </form>
    </div>
  );
};
export default ContactForm;
