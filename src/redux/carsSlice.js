import { createSlice } from "@reduxjs/toolkit";
import { fetchCars } from "./carsOperations";

const carsInitialState = {
  itemsCars: [],
  favoritesCars: [],
  isLoading: false,
  error: null,
};

const handlePending = (state) => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const carsSlice = createSlice({
  name: "cars",
  initialState: carsInitialState,

  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.pending, handlePending)
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.itemsCars = action.payload;
      })
      .addCase(fetchCars.rejected, handleRejected);
  },
});

export const carsReducer = carsSlice.reducer;
