// import { createSelector } from "@reduxjs/toolkit";

export const selectItemsCars = (state) => state.cars.itemsCars; // Всі cars зі стейта Store
export const selectFavoriteCars = (state) => state.cars.favoriteCars;
export const selectIsLoading = (state) => state.cars.isLoading;
export const selectError = (state) => state.cars.error;
// export const selectFilter = (state) => state.filter;
