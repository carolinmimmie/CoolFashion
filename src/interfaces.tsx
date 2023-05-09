import { Timestamp } from "firebase/firestore";

interface IAllProducts {
  id: string;
  category: string;
  image: string;
  gender: string;
  liked: boolean;
  news: boolean;
  price: number;
  title: string;
  date: Timestamp;
}

interface IContactInformation {
  id: string;
  username: string;
  email: string;
  textfield: string;
}

// interface ICardCategories {
//   categoryList: IAllProducts[];
// }

export type { IAllProducts, IContactInformation};
