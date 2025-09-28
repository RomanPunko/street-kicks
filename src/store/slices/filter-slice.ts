import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface IFiltersState {
  typeFilters: string[];
  genderFilters: string[];
  priceRange: [number, number];
}

const initialState: IFiltersState = {
  typeFilters: [],
  genderFilters: [],
  priceRange: [0, Infinity],
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setTypeFilters(state, action: PayloadAction<string>) {
      if (state.typeFilters.includes(action.payload)) {
        state.typeFilters = state.typeFilters.filter((filter) => filter !== action.payload);
      } else {
        state.typeFilters.push(action.payload);
      }
    },
    setGenderFilters(state, action: PayloadAction<string>) {
      if (state.genderFilters.includes(action.payload)) {
        state.genderFilters = state.genderFilters.filter((filter) => filter !== action.payload);
      } else {
        state.genderFilters.push(action.payload);
      }
    },
    setPriceRange(state, action: PayloadAction<[number, number]>) {
      state.priceRange = action.payload;
    },
    resetFilters(state) {
      state.genderFilters = [];
      state.typeFilters = [];
      state.priceRange = [0, Infinity];
    },
  },
});

export const { setTypeFilters, setGenderFilters, resetFilters, setPriceRange } =
  filtersSlice.actions;
export default filtersSlice.reducer;
