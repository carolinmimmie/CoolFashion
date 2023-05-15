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

//Denna funktionen är värdelös, för det finns inget som bestämmer vad som är
//populärt eller inte

// export const getPopularCategories = async () => {
//   const q = query(AllProductsCollectionRef, where("category", "==", "hoodie"));

//   const data = await getDocs(q);
//   return data.docs.map((doc) => ({
//     ...(doc.data() as IAllProducts),

//     id: doc.id,
//   }));
// };

export const getLikedProducts = async () => {
  const q = query(AllProductsCollectionRef, where("liked", "==", "true"));

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

const CartCollectionRef = collection(db, "Cart Collection");

export const getCartCollection = async () => {
  const data = await getDocs(CartCollectionRef);
  return data.docs.map((doc) => ({
    ...(doc.data() as IAllProducts),

    id: doc.id,
  }));
};

export const addToCartCollection = async (product: IAllProducts) => {
  await addDoc(CartCollectionRef, {
    category: product.category,
    image: product.image,
    liked: product.liked,
    price: product.price,
    title: product.title,
    date: product.date,
  });
  console.log()
  // getAllProducts();
};

export const deleteFromCart = async (id: string) => {
  await deleteDoc(doc(CartCollectionRef, id));
  getCartCollection();
};

export const createProduct = async (product: IAllProducts) => {
  await addDoc(AllProductsCollectionRef, {
    category: product.category,
    image: product.image,
    liked: product.liked,
    price: product.price,
    title: product.title,
    date: product.date,
  });
  // getAllProducts();
};

export const createContactInformation = async (info: IContactInformation) => {
  await addDoc(ContactInformationCollectionRef, {
    username: info.username,
    email: info.email,
    textfield: info.textfield,
  });
};
