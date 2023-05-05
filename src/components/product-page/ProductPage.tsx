import React, { useEffect, useState } from "react";
import { IAllProducts, IContactInformation } from "../../interfaces";
import { getAllProducts, getContactInformation } from "../../Api";
import { imageListClasses } from "@mui/material";

const ProductPage = () => {
  const [allProducts, setAllProducts] = useState<IAllProducts[]>([]);
  const [contactInformation, setContactInformation] = useState<
    IContactInformation[]
  >([]);

  useEffect(() => {
    const fetchAllProducts = async () => {
      const products = await getAllProducts();
      setAllProducts(products);
    };

    const fetchContactInformation = async () => {
      const contactInformation = await getContactInformation();
      setContactInformation(contactInformation);
    };
    fetchAllProducts();
    fetchContactInformation();
  }, []);

  return (
    <div>
      <p></p>
      {allProducts.map((x) => (
        <div>
          <img
            src="https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder-1024x1024.png"
            alt=""
            width={40}
            height={40}
          />
          <p>
            {`Här är hämtat från All Products collection: 
          ${x.category}, 
          ${x.gender}, 
          ${x.news},
          ${x.price},
          ${x.title},`}
          </p>
        </div>
      ))}

      {contactInformation.map((x) => (
        <p>
          {`Här är hämtat från Clothes collection: 
        ${x.email}, 
        ${x.textfield}, 
        ${x.username}`}
        </p>
      ))}
    </div>
  );
};

export default ProductPage;
