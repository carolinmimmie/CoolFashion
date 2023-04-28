interface IAllProducts {
  id: string;
  category: string;
  garment: string;
  gender: string;
  title: string;
}

interface IClothes {
  id: string;
  garment: string;
  gender: string;
  title: string;
}

export type { IAllProducts, IClothes };