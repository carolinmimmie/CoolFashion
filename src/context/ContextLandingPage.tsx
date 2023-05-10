import React, { createContext, Dispatch, useEffect, useState } from "react";
import { getAllProducts } from "../Api";
import Landingpage from "../components/landing-page/Landingpage";
import { IAllProducts } from "../interfaces";



interface ILandingPageContext {
  productList: IAllProducts[];
  setProductList: Dispatch<React.SetStateAction<IAllProducts[]>>;
}

export const LandingPageContext = createContext<ILandingPageContext>({
  productList: [],
  setProductList: () => {},

});
const LandingpageC = () => {
  const [productList, setProductList] = useState<IAllProducts[]>([]);


  useEffect(() => {
    const fetchProducts = async () => {
      const productList = await getAllProducts();
      setProductList(productList);
    };
    fetchProducts();
  }, []);

  return (
    <>
      <LandingPageContext.Provider
        value={{
          productList,
          setProductList,
        }}
      >
        <Landingpage></Landingpage>
      </LandingPageContext.Provider>
    </>
  );
};

export default LandingpageC;
