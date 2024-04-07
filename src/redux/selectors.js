import { createSelector } from "@reduxjs/toolkit";

// === Атомарні селектори ===
export const selectItemLimitCars = (state) => state.cars.itemLimitCars; // LIMIT cars зі стейта Store
export const selectFavoriteCars = (state) => state.cars.favoriteCars;
export const selectIsLoading = (state) => state.cars.isLoading;
export const selectError = (state) => state.cars.error;

export const selectFilters = (state) => state.filters;

export const selectAllCars = (state) => state.cars.allCars; // Всі cars зі стейта Store

// === Складові селектори ===
// Масив унікальних марок автомобілів для фільтрації
export const selectUniqueCarBrands = createSelector(
  [selectAllCars],
  (allCars) => {
    const uniqueCarBrands = [...new Set(allCars.map((car) => car.make))].sort(
      (a, b) => a.localeCompare(b)
    );
    return uniqueCarBrands;
  }
);

// Масив унікальних прайсів оренди автомобілів
export const selectRentalPrices = createSelector([selectAllCars], (allCars) => {
  const rentalPrices = [
    ...new Set(allCars.map((car) => Number(car.rentalPrice.slice(1)))),
  ];

  // Впорядковуємо масив чисел по зростанню
  rentalPrices.sort((a, b) => a - b);
  return rentalPrices;
});
