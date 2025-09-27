import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface FiltersState {
  search: string;
  category?: string;
}

const initialState: FiltersState = {
  search: "",
  category: undefined,
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setSearch(state, action: PayloadAction<string>) {
      state.search = action.payload;
    },
    setCategory(state, action: PayloadAction<string | undefined>) {
      state.category = action.payload;
    },
    resetFilters(state) {
      state.search = "";
      state.category = undefined;
    },
  },
});

export const { setSearch, setCategory, resetFilters } = filtersSlice.actions;
export default filtersSlice.reducer;
