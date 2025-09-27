import { combineReducers, configureStore } from '@reduxjs/toolkit';
import productsDataReducer from './slices/products-data-slice';
import filtersSliceReducer from './slices/filter-slice';

const rootReducer = combineReducers({
  products: productsDataReducer,
  filtres: filtersSliceReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type AppStore = ReturnType<typeof setupStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];