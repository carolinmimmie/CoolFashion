import React, { useEffect, useState } from "react";
import { IAllProducts, IContactInformation } from "../../interfaces";
import { getAllProducts, getContactInformation } from "../../Api";
import { Box, imageListClasses } from "@mui/material";
import CardProducts from "../produkts/CardProducts";

const ProductPage = () => {
  const [allProducts, setAllProducts] = useState<IAllProducts[]>([]);
  const [contactInformation, setContactInformation] = useState<
    IContactInformation[]
  >([]);

  useEffect(() => {
    const fetchAllProducts = async () => {
      const products = await getAllProducts();
      setAllProducts(products);
      // console.log(products);
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
        <Box sx={{ maxWidth: 150, mb: 1, mt: 1, ml: 10, border: 1 }}>
          <img
            className="allProductsImg"
            src="https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder-1024x1024.png"
            alt=""
            width={150}
            height={150}
          />
          <p>
            {`Här är hämtat från All Products collection: 
          ${x.category}, 
          ${x.gender}, 
          ${x.news},
          ${x.price},
          ${x.title},`}
          </p>
        </Box>
      ))}

      {contactInformation.map((x) => (
        <p>
          {`Här är hämtat från Contact Information collection: 
        ${x.email}, 
        ${x.textfield}, 
        ${x.username}`}
        </p>
      ))}
    </div>
  );
};

export default ProductPage;
