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
import { IAllProducts, IClothes } from "./interfaces";


const AllProductsCollectionRef = collection(db, "Products");

export const getAllProducts = async () => {
  const data = await getDocs(AllProductsCollectionRef);
  return data.docs.map((doc) => ({
    ...(doc.data() as IAllProducts),

    id: doc.id,
  }));
};

const ClothesCollectionRef = collection(db, "Clothes");

export const getClothes = async () => {
  const data = await getDocs(ClothesCollectionRef);
  return data.docs.map((doc) => ({
    ...(doc.data() as IClothes),

    id: doc.id,
  }));
};