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

const ContactInformationCollectionRef = collection(db, "Contact Information");

export const getContactInformation = async () => {
  const data = await getDocs(ContactInformationCollectionRef);
  return data.docs.map((doc) => ({
    ...(doc.data() as IContactInformation),

    id: doc.id,
  }));
};
