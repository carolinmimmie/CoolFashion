import React, { useState } from "react";
//Interface for formdata
interface IFormData {
  username: string;
  email: string;
  textfield: string;
}
const ContactForm = () => {
  const [formData, setFormData] = useState<IFormData>({
    //Satt mina use-state variablar till tomma som original
    username: "",
    email: "",
    textfield: "",
  });
  //Känner av att något händer i input-fältet
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name } = event.target;
    setFormData({ ...formData, [name]: event.target.value });
  };
  //Knappen i form
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
  };
  return (
    <div className="container">
      <h2>Kontaktformulär</h2>
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Namn:</label>
        </div>
        <div>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
        </div>
        <div>
          <input
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="text">Meddelande:</label>
        </div>
        <div>
          <input
            type="textarea"
            id="textfield"
            name="textfield"
            maxLength={500}
            value={formData.textfield}
            onChange={handleChange}
          />
        </div>
        <div>
          <button type="submit">Submit </button>
        </div>
      </form>
    </div>
  );
};
export default ContactForm;
