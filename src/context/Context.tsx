import React, {
  createContext,
  Dispatch,
  ReactNode,
  useEffect,
  useState,
} from "react";
import { IAllProducts, IContext } from "../interfaces";
import { getAllProducts, createProduct, getCartCollection } from "../Api";
import { storage } from "../firebase.config";
import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";

const Context = createContext<IContext>({
  productList: [],
  setProductList: () => {},

  searchTerm: "",
  setSearchTerm: () => {},

  searchResults: [],
  setSearchResults: () => {},

  showResults: false,
  setShowResults: () => {},

  changeLikedStatus: () => {},

  cartList: [],
  setCartList: () => {},
});

//DATAN Vill vi skicka vidare
export const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [productList, setProductList] = useState<IAllProducts[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<IAllProducts[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [cartList, setCartList] = useState<IAllProducts[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getAllProducts();
      setProductList(products);
      const cartItems = await getCartCollection();
      setCartList(cartItems);
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    const results = productList.filter(
      (product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.price.toString().includes(searchTerm)
    );
    setSearchResults(results);
    setShowResults(searchTerm !== "");
  }, [searchTerm, productList]);

  const changeLikedStatus = (id: string) => {
    const updatedProductsList = productList.map((x) => {
      if (id === x.id) {
        return { ...x, liked: !x.liked };
      }
      return x;
    });
    setProductList(updatedProductsList);
  };

  

  return (
    <Context.Provider
      value={{
        productList,
        setProductList,
        searchTerm,
        setSearchTerm,
        searchResults,
        setSearchResults,
        showResults,
        setShowResults,
        changeLikedStatus,
        cartList,
        setCartList,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Context;
