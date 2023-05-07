import React, { useState } from "react";
import { IAllProducts } from "../../interfaces";
import { createProduct } from "../../Api";
import { storage } from "../../firebase.config";
import { ref } from "firebase/storage";

const CustomerForm = () => {
  const [formData, setFormData] = useState<IAllProducts>({
    //Satt mina use-state variablar till tomma som original
    id: "",
    category: "",
    image: "",
    gender: "",
    liked: false,
    news: true,
    price: 99,
    title: "",
  });

  const [imageUpload, setImageUpload] = useState(null);

  // const uploadImage = () => {
  //   if (imageUpload == null) return;
  //   const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
  // };

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
    createProduct(formData);
  };
  return (
    <div className="container-form">
      <h2>Lägg till Produkt</h2>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-box">
          <label htmlFor="title">Produktnamn:</label>
        </div>
        <div className="form-box">
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </div>
        <div className="form-box">
          <select
            id="category"
            name="category"
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
          <label htmlFor="image">Produktbild:</label>
        </div>
        <div className="form-box">
          <input
            type="file"
            id="image"
            name="image"
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
