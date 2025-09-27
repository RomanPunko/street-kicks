import { IProducts } from "@/types/data-types";
import axios from "axios";

export const ProductsService = async () => {
  try {
    const response = await axios.get<IProducts>("/api/products");
    return response;
  } catch (error: any) {
    throw new Error(error);
  }
};
