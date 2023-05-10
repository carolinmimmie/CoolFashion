import React, { useContext, useEffect, useState } from "react";
import { IAllProducts } from "../../interfaces";
import { createProduct, getAllProducts } from "../../Api";
import { storage } from "../../firebase.config";
import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import { Timestamp } from "firebase/firestore";
import { LandingPageContext } from "../../context/ContextLandingPage";

const CustomerForm = () => {
  const { productList, setProductList } = useContext(LandingPageContext);
  const cProduct = async (product: IAllProducts) => {
    await createProduct(product);
    setProductList(await getAllProducts());
  };
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
    date: Timestamp.now(),
  });

  const [imageUpload, setImageUpload] = useState<any>(null);

  const uploadImage = async () => {
    if (!imageUpload || imageUpload.length === 0) {
      alert("Välj fil");
      return;
    }
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    const snapshot = await uploadBytes(imageRef, imageUpload);
    const url = await getDownloadURL(snapshot.ref);
    formData.image = url;
    console.log(formData);
    alert("Produkten är uppladdad");
    cProduct(formData);
  };

  const handleImage = (event: React.ChangeEvent<any>) => {
    setImageUpload(
      !event.target.files[0] ? alert("Välj fil") : event.target.files[0]
    );
  };

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
    uploadImage();
    // window.location.reload();
    console.log(formData);
    getAllProducts();
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
          <input type="file" id="image" name="image" onChange={handleImage} />
        </div>
        <div className="form-box">
          <button type="submit" className="submitButton">
            Lägg till produkt
          </button>
        </div>
      </form>
    </div>
  );
};
export default CustomerForm;
