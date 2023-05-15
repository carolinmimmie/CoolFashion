import React, { useContext, useEffect, useState } from "react";
import { IAllProducts } from "../../../interfaces";
import { createProduct, getAllProducts } from "../../../Api";
import { storage } from "../../../firebase.config";
import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import { Timestamp } from "firebase/firestore";
import Context from "../../../context/Context";

const AdminForm = () => {
  const { productList, setProductList } = useContext(Context);

  const [formData, setFormData] = useState<IAllProducts>({
    id: "",
    category: "",
    image: "",
    gender: "",
    liked: false,
    price: 99,
    title: "",
    date: Timestamp.now(),
    addedToCart: false,
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
    // createProduct(formData);
    alert("Produkten är uppladdad");
  };

  const handleImage = (event: React.ChangeEvent<any>) => {
    setImageUpload(
      !event.target.files[0] ? alert("Välj fil") : event.target.files[0]
    );
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name } = event.target;
    setFormData({ ...formData, [name]: event.target.value });
  };

  // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   event?.preventDefault();
  //   uploadImage();
  //   console.log(formData);
  //   createProduct(formData);
  //   const newArray: IAllProducts[] = [...productList, formData];
  //   setProductList(newArray);
  // };

  //Nya mega versionen av funktionen som har try, catch. Så att den inte
  //ska råka ladda upp objektet innan den lyckats läsa in bilden

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    try {
      await uploadImage();
      console.log(formData);
      await createProduct(formData);
      const newArray: IAllProducts[] = [...productList, formData];
      setProductList(newArray);
    } catch (error) {
      console.error(error);
    }
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
export default AdminForm;
