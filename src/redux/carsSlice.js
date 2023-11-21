import { createSlice } from "@reduxjs/toolkit";
import {
  fetchLimitCars,
  fetchLoadMoreCars,
  fetchAllCars,
} from "./carsOperations";

const carsInitialState = {
  itemCars: [],
  favoriteCars: [],
  isLoading: false,
  error: null,
  allCars: [],
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
      state.favoriteCars = [...state.favoriteCars, action.payload];
    },

    removeFromFavorites: (state, action) => {
      state.favoriteCars = state.favoriteCars.filter(
        (car) => car.id !== action.payload.id
      );
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchLimitCars.pending, handlePending)
      .addCase(fetchLimitCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.itemCars = action.payload;
      })
      .addCase(fetchLimitCars.rejected, handleRejected)

      .addCase(fetchLoadMoreCars.pending, handlePending)
      .addCase(fetchLoadMoreCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.itemCars = [...state.itemCars, ...action.payload];
      })
      .addCase(fetchLoadMoreCars.rejected, handleRejected)

      .addCase(fetchAllCars.pending, handlePending)
      .addCase(fetchAllCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.allCars = action.payload;
      })
      .addCase(fetchAllCars.rejected, handleRejected);
  },
});

export const { addToFavorites, removeFromFavorites } = carsSlice.actions;

export const carsReducer = carsSlice.reducer;
