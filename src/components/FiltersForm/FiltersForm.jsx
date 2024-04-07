import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setFilters, clearFilters } from "../../redux/filtersSlice";
import {
  selectUniqueCarBrands,
  selectRentalPrices,
} from "../../redux/selectors";
import Select from "react-select";
// import { Container } from "./FiltersForm.styled";

const FiltersForm = () => {
  const dispatch = useDispatch();
  const uniqueCarBrands = useSelector(selectUniqueCarBrands);
  const rentalPrices = useSelector(selectRentalPrices);

  // Локальний стан для збереження даних форми
  const [formData, setFormData] = useState({
    brand: "",
    price: "",
    minMileage: "",
    maxMileage: "",
  });

  // Очистка filters в Redux Store при розмонтуванні компонента (componentWillUnmount )
  useEffect(() => {
    return () => {
      dispatch(clearFilters());
    };
  }, [dispatch]);

  // Отримання об'єктів для використання у випадаючому списку car_brand
  const brandOptions = uniqueCarBrands.map((brand) => ({
    value: brand,
    label: brand,
  }));

  // Отримання об'єктів для використання у випадаючому списку price
  const priceOptions = rentalPrices.map((price) => ({
    value: price,
    label: `То ${price}$`,
  }));

  // Функції для обробки вибору користувачем параметрів фільтрації
  const handleBrandChange = (selectedOption) => {
    setFormData({
      ...formData,
      brand: selectedOption ? selectedOption.value : "",
    });
  };

  const handlePriceChange = (selectedOption) => {
    setFormData({
      ...formData,
      price: selectedOption ? Number(selectedOption.value) : "",
    });
  };

  const handleMinMileage = (event) => {
    // Видаляємо всі коми в minMileage перед конвертацією у число
    const value = parseInt(event.target.value.replace(/,/g, ""), 10);
    if (!isNaN(value) && value >= 0) {
      setFormData({ ...formData, minMileage: value });
    }
  };

  const handleMaxMileage = (event) => {
    // Видаляємо всі коми в maxMileage перед конвертацією у число
    const value = parseInt(event.target.value.replace(/,/g, ""), 10);
    if (!isNaN(value) && value >= 0) {
      setFormData({ ...formData, maxMileage: value });
    }
  };

  // При "Submit" форми відправляємо action для збереження filters в Redux Store
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(setFilters(formData));
  };

  // При "Reset" відправляємо action для очистки filters в Redux Store
  const handleReset = () => {
    dispatch(clearFilters());
    // Очистка форми на сторінці
    setFormData({
      brand: "",
      price: "",
      minMileage: "",
      maxMileage: "",
    });
  };

  // Функція для форматування числа з комами для відображення в inputs "Сar mileage / km"
  const formatNumberWithCommas = (value) => {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <div>
        <label htmlFor="car_brand">Car brand</label>
        <Select
          id="car_brand"
          name="brand"
          placeholder="Enter the text"
          onChange={handleBrandChange}
          options={brandOptions}
          value={
            formData.brand
              ? brandOptions.find((option) => option.value === formData.brand)
              : null
          }
          isClearable={true}
          isSearchable={true}
          blurInputOnSelect={true}
        />
      </div>

      <div>
        <label htmlFor="price">Price / 1 hour</label>
        <Select
          id="price"
          name="price"
          placeholder="To $"
          onChange={handlePriceChange}
          options={priceOptions}
          value={
            formData.price
              ? priceOptions.find(
                  (option) => option.value === String(formData.price)
                )
              : null
          }
          isClearable={true}
          isSearchable={true}
          blurInputOnSelect={true}
        />
      </div>

      <div>Сar mileage / km</div>
      <label htmlFor="car_mileage_from">From</label>
      <input
        id="car_mileage_from"
        type="text"
        name="mileageFrom"
        value={formatNumberWithCommas(formData.minMileage)}
        onChange={handleMinMileage}
      ></input>

      <label htmlFor="car_mileage_to">To</label>
      <input
        id="car_mileage_to"
        type="text"
        name="mileageTo"
        value={formatNumberWithCommas(formData.maxMileage)}
        onChange={handleMaxMileage}
      ></input>

      <button type="submit">Search</button>
      <button type="button" onClick={handleReset}>
        Reset
      </button>
    </form>
  );
};

export default FiltersForm;
