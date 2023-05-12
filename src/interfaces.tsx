import { Timestamp } from "firebase/firestore";

interface IAllProducts {
  id: string;
  category: string;
  image: string;
  gender: string;
  liked: boolean;
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

export type { IAllProducts, IContactInformation };
