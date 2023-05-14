import React, {
  createContext,
  Dispatch,
  ReactNode,
  useEffect,
  useState,
} from "react";
import { IAllProducts, IContext } from "../interfaces";
import { getAllProducts } from "../Api";

const Context = createContext<IContext>({
  productList: [],
  setProductList: () => {},

  searchTerm: "",
  setSearchTerm: () => {},

  searchResults: [],
  setSearchResults: () => {},

  showResults: false,
  setShowResults: () => {},
});

export const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [productList, setProductList] = useState<IAllProducts[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<IAllProducts[]>([]);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getAllProducts();
      setProductList(products);
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
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Context;
