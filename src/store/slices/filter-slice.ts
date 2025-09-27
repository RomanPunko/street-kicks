import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface IFiltersState {
  search: string;
  typeFilters: string[];
  genderFilters: string[];
}

const initialState: IFiltersState = {
  search: "",
  typeFilters: [],
  genderFilters: [],
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setSearch(state, action: PayloadAction<string>) {
      state.search = action.payload;
    },
    setTypeFilters(state, action: PayloadAction<string>) {
      if (state.typeFilters.includes(action.payload)) {
        state.typeFilters = state.typeFilters.filter(
          (filter) => filter !== action.payload
        );
      } else {
        state.typeFilters.push(action.payload);
      }
    },
    setGenderFilters(state, action: PayloadAction<string>) {
      if (state.genderFilters.includes(action.payload)) {
        state.genderFilters = state.genderFilters.filter(
          (filter) => filter !== action.payload
        );
      } else {
        state.genderFilters.push(action.payload);
      }
    },
    resetFilters(state) {
      state.genderFilters = [];
      state.typeFilters = [];
    },
  },
});

export const { setSearch, setTypeFilters, setGenderFilters, resetFilters } = filtersSlice.actions;
export default filtersSlice.reducer;
