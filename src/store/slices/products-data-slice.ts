import { createSlice, type PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { ProductsService } from '@/services/products-service';
import { IProducts } from '@/types/data-types';
import { getErrorMessage } from '@/utils/get-error-message';

export const getProducts = createAsyncThunk<IProducts, void, { rejectValue: string }>(
  'products/getAll',
  async (_, thunkAPI) => {
    try {
      const response = await ProductsService();
      return response.data;
    } catch (err: unknown) {
      const message = getErrorMessage(err);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

interface IProductsState {
  products: IProducts;
  loading: boolean;
  error: string | null;
}

const initialState: IProductsState = {
  products: [],
  loading: true,
  error: null,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProducts.fulfilled, (state, action: PayloadAction<IProducts>) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Error';
      });
  },
});

export default productsSlice.reducer;
