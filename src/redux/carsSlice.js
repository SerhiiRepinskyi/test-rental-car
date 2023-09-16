import { createSlice } from "@reduxjs/toolkit";
import { fetchCars, fetchLoadMoreCars } from "./carsOperations";

const carsInitialState = {
  itemsCars: [],
  favoriteCars: [],
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

  reducers: {
    addToFavorites: (state, action) => {
      const carId = action.payload;
      if (!state.favoriteCars.includes(carId)) {
        state.favoriteCars = [...state.favoriteCars, carId];
      }
    },

    removeFromFavorites: (state, action) => {
      const carId = action.payload;
      state.favoriteCars = state.favoriteCars.filter((id) => id !== carId);
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.pending, handlePending)
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.itemsCars = action.payload;
      })
      .addCase(fetchCars.rejected, handleRejected)

      .addCase(fetchLoadMoreCars.pending, handlePending)
      .addCase(fetchLoadMoreCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.itemsCars = [...state.itemsCars, ...action.payload];
      })
      .addCase(fetchLoadMoreCars.rejected, handleRejected);
  },
});

export const { addToFavorites, removeFromFavorites } = carsSlice.actions;

export const carsReducer = carsSlice.reducer;
