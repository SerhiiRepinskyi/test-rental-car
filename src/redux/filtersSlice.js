import { createSlice } from "@reduxjs/toolkit";

const filtersInitialState = {
  brand: "",
  price: "",
  minMileage: "",
  maxMileage: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState: filtersInitialState,

  reducers: {
    setFilters: (state, action) => {
      return { ...state, ...action.payload };
    },

    clearFilters: (state) => {
      return filtersInitialState;
    },
  },
});

export const { setFilters, clearFilters } = filtersSlice.actions;

export const filtersReducer = filtersSlice.reducer;
