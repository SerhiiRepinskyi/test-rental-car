const getVisibleCarsByFilters = (allCars, filters) => {
  const { brand, price, minMileage, maxMileage } = filters;

  let filteredCars = [...allCars]; // Копія cars для фільтрування

  // Послідовно фільтруємо cars за значеннями фільтрів, якщо вони вказані
  if (brand) {
    filteredCars = filteredCars.filter((car) => car.make === brand);
  }
  if (price) {
    filteredCars = filteredCars.filter(
      (car) => Number(car.rentalPrice.slice(1)) <= price
    );
  }
  if (minMileage) {
    filteredCars = filteredCars.filter((car) => car.mileage >= minMileage);
  }
  if (maxMileage) {
    filteredCars = filteredCars.filter((car) => car.mileage <= maxMileage);
  }

  return filteredCars;
};

export default getVisibleCarsByFilters;
