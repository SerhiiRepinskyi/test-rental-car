// import { createSelector } from "@reduxjs/toolkit";

export const selectItemCars = (state) => state.cars.itemCars; // Список cars зі стейта Store
export const selectFavoriteCars = (state) => state.cars.favoriteCars;
export const selectIsLoading = (state) => state.cars.isLoading;
export const selectError = (state) => state.cars.error;

// export const selectFilter = (state) => state.filter;

export const selectAllCars = (state) => state.cars.allCars; // Всі cars зі стейта Store
// Масив унікальних марок автомобілів для фільтрації
export const selectUniqueCarBrands = (state) => {
  const uniqueCarBrands = [
    ...new Set(state.cars.allCars.map((car) => car.make)),
  ].sort((a, b) => a.localeCompare(b));
  return uniqueCarBrands;
};
// Масив унікальних прайсів оренди автомобілів
export const selectRentalPrices = (state) => {
  const rentalPrices = [
    ...new Set(state.cars.allCars.map((car) => car.rentalPrice)),
  ];
  return rentalPrices;
};
