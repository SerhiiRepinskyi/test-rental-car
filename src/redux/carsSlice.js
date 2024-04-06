import { createSlice } from "@reduxjs/toolkit";
import {
  fetchLimitCars,
  fetchLoadMoreCars,
  fetchAllCars,
} from "./carsOperations";
import { Notify } from "notiflix/build/notiflix-notify-aio";

const carsInitialState = {
  itemLimitCars: [],
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
      Notify.success("Car added to favorites");
    },

    removeFromFavorites: (state, action) => {
      state.favoriteCars = state.favoriteCars.filter(
        (car) => car.id !== action.payload.id
      );
      Notify.warning("Car removed from favorites");
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchLimitCars.pending, handlePending)
      .addCase(fetchLimitCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.itemLimitCars = action.payload;
      })
      .addCase(fetchLimitCars.rejected, handleRejected)

      .addCase(fetchLoadMoreCars.pending, handlePending)
      .addCase(fetchLoadMoreCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.itemLimitCars = [...state.itemLimitCars, ...action.payload];
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
