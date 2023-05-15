import { Timestamp } from "firebase/firestore";
import { Dispatch } from "react";

interface IAllProducts {
  id: string;
  category: string;
  image: string;
  gender: string;
  liked: boolean;
  price: number;
  title: string;
  date: Timestamp;
  addedToCart: boolean;
}

interface IContactInformation {
  id: string;
  username: string;
  email: string;
  textfield: string;
}

interface IContext {
  productList: IAllProducts[];
  setProductList: Dispatch<React.SetStateAction<IAllProducts[]>>;

  searchTerm: string;
  setSearchTerm: Dispatch<React.SetStateAction<string>>;

  searchResults: IAllProducts[];
  setSearchResults: Dispatch<React.SetStateAction<IAllProducts[]>>;
  
  showResults: boolean;
  setShowResults: Dispatch<React.SetStateAction<boolean>>;
}
interface IProductCard {
  product:IAllProducts;
}

export type { IAllProducts, IContactInformation, IContext,IProductCard };
