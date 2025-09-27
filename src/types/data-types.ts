export interface IProduct {
  id: string;
  name: string;
  image: string;
  price: number;
  gender: string[];
  type: string;
}

export type IProducts = IProduct[];
