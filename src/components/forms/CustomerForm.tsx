import React, { useState } from "react";
import { IAllProducts } from "../../interfaces";
//Interface for formdata
// interface IFormData {
//   title: string;
//   category: string;
//   img: string;
// }
const CustomerForm = () => {
  const [formData, setFormData] = useState<IAllProducts>({
    //Satt mina use-state variablar till tomma som original
    id: "",
    category: "",
    image: "",
    gender: "",
    liked: false,
    news: false,
    price: 99,
    title: "string",
  });
  //Känner av att något händer i input-fältet
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name } = event.target;
    setFormData({ ...formData, [name]: event.target.value });
  };
  //Knappen i form
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
  };
  return (
    <div className="container-form">
      <h2>Lägg till Produkt</h2>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-box">
          <label htmlFor="productname">Produktnamn:</label>
        </div>
        <div className="form-box">
          <input
            type="text"
            id="productname"
            name="productname"
            value={formData.title}
            onChange={handleChange}
          />
        </div>
        <div className="form-box">
          <select
            id="productcategory"
            name="productcategory"
            value={formData.category}
            onChange={handleChange}
          >
            <option value="">Välj kategori:</option>
            <option value="Tröjor">Tröjor</option>
            <option value="Toppar">Toppar</option>
            <option value="Byxor">Byxor</option>
            <option value="Jeans">Jeans</option>
            <option value="Jackor">Jackor</option>
            <option value="Skor">Skor</option>
            <option value="Skjortor">Skjortor</option>
            <option value="Shorts">Shorts</option>
            <option value="Klänningar/Kjolar">Klänningar/Kjolar</option>
            <option value="Kepsar/Mössor">Kepsar/Mössor</option>
            <option value="Väskor">Väskor</option>
            <option value="Accessoarer">Accessoarer</option>
          </select>
        </div>
        <div className="form-box">
          <label htmlFor="text">Produktbild:</label>
        </div>
        <div className="form-box">
          <input
            type="file"
            id=" productimage"
            name=" productimage"
            value={formData.image}
            onChange={handleChange}
          />
        </div>
        <div className="form-box">
          <button type="submit">Lägg till produkt</button>
        </div>
      </form>
    </div>
  );
};
export default CustomerForm;
