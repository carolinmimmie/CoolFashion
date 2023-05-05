interface IAllProducts {
  id: string;
  category: string;
  image: string;
  gender: string;
  liked: boolean;
  news: boolean;
  price: number;
  title: string;
}

interface IContactInformation {
  id: string;
  email: string;
  textfield: string;
  username: string;
}

export type { IAllProducts, IContactInformation };
