import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  Timestamp,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "./firebase.config";
import { IAllProducts, IContactInformation } from "./interfaces";

const AllProductsCollectionRef = collection(db, "All Products");

export const getAllProducts = async () => {
  const data = await getDocs(AllProductsCollectionRef);
  return data.docs.map((doc) => ({
    ...(doc.data() as IAllProducts),

    id: doc.id,
  }));
};

export const getPopularCatergories = async () => {
  const q = query(AllProductsCollectionRef, where("category", "==", "t-shirt" && "hoodie" && "jeans"));

  const data = await getDocs(q);
  return data.docs.map((doc) => ({
    ...(doc.data() as IAllProducts),

    id: doc.id,
  }));
};


const ContactInformationCollectionRef = collection(db, "Contact Information");

export const getContactInformation = async () => {
  const data = await getDocs(ContactInformationCollectionRef);
  return data.docs.map((doc) => ({
    ...(doc.data() as IContactInformation),

    id: doc.id,
  }));
};

export const createProduct = async (product: IAllProducts) => {
  await addDoc(AllProductsCollectionRef, {
    category: product.category,
    image: product.image,
    gender: product.gender,
    liked: product.liked,
    news: product.news,
    price: product.price,
    title: product.title,
  });
};

export const createContactInformation = async (info: IContactInformation) => {
  await addDoc(ContactInformationCollectionRef, {
    username: info.username,
    email: info.email,
    textfield: info.textfield,
  });
};
