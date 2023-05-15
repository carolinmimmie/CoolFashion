import { Box } from "@mui/material";
import React, { useContext, useState } from "react";
import Context from "../../../context/Context";
import { IAllProducts } from "../../../interfaces";
import ProductCard from "../../product-card/ProductCard";

const MyFavoritePage = () => {
  const { productList, setProductList } = useContext(Context);

  const productCard = productList.map((product) => (
    <ProductCard product={product}></ProductCard>
  ));
  return (
    <>
      <div>
        <h3 className="sido-rubrik">Favoriter</h3>
      </div>
      <div className="container">{productCard}</div>
    </>
  );
};

export default MyFavoritePage;
