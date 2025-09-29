import { IProducts } from '@/types/data-types';
import { getErrorMessage } from '@/utils/get-error-message';
import axios from 'axios';

export const ProductsService = async () => {
  try {
    const response = await axios.get<IProducts>('/api/products');
    return response;
  } catch (err: unknown) {
    throw new Error(getErrorMessage(err));
  }
};
