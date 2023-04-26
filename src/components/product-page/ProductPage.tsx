import React, { useEffect, useState } from "react";
import { IAllProducts, IClothes } from "../../interfaces";
import { getAllProducts, getClothes } from "../../Api";

const ProductPage = () => {
  const [allProducts, setAllProducts] = useState<IAllProducts[]>([]);
  const [clothes, setClothes] = useState<IClothes[]>([]);

  useEffect(() => {
    const fetchAllProducts = async () => {
      const products = await getAllProducts();
      setAllProducts(products);
    };

    const fetchClothes = async () => {
      const products = await getClothes();
      setClothes(products);
    };
    fetchAllProducts();
    fetchClothes();
  }, []);
  return (
    <div>
      <p></p>
      {allProducts.map((x) => (
        <p>
          {`Här är hämtat från Products collection: 
          ${x.category}, 
          ${x.garment}, 
          ${x.gender}, 
          ${x.title}`}
        </p>
      ))}

      {clothes.map((x) => (
        <p>
          {`Här är hämtat från Clothes collection: 
        ${x.garment}, 
        ${x.gender}, 
        ${x.title}`}
        </p>
      ))}
    </div>
  );
};

export default ProductPage;
