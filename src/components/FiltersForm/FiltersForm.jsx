import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setFilters, clearFilters } from "../../redux/filtersSlice";
import {
  selectUniqueCarBrands,
  selectRentalPrices,
} from "../../redux/selectors";
import CustomReactSelect from "../CustomReactSelect";
import {
  FormStyled,
  LabelStyled,
  TextMileage,
  MileagesContainer,
  MileageWrapper,
  MileageLabel,
  MileageInput,
  BtnFilters,
} from "./FiltersForm.styled";

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

  // Очистка filters в Redux Store при розмонтуванні компонента (componentWillUnmount)
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
  // handleBrandChange, handlePriceChange, handleMileageChange
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

  const handleMileageChange = (event) => {
    const { name, value } = event.target;
    let processedValue = value;
    if (name === "minMileage" || name === "maxMileage") {
      // Видалення коми і перетворення рядка на число
      processedValue = Number(value.replace(/,/g, ""));
      if (isNaN(processedValue)) {
        processedValue = "";
      }
    }
    setFormData({
      ...formData,
      [name]: processedValue,
    });
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

  return (
    <FormStyled onSubmit={handleSubmit} autoComplete="off">
      <div>
        <LabelStyled htmlFor="car_brand">Car brand</LabelStyled>
        <CustomReactSelect
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
          type="BRAND"
        />
      </div>

      <div>
        <LabelStyled htmlFor="price">Price / 1 hour</LabelStyled>
        <CustomReactSelect
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
          type="PRICE"
        />
      </div>

      <div>
        <TextMileage>Сar mileage / km</TextMileage>

        <MileagesContainer>
          <MileageWrapper>
            <MileageLabel htmlFor="car_mileage_from">From</MileageLabel>
            <MileageInput
              id="car_mileage_from"
              type="text"
              name="minMileage"
              value={formData.minMileage.toLocaleString("en-US")}
              onChange={handleMileageChange}
            ></MileageInput>
          </MileageWrapper>

          <MileageWrapper>
            <MileageLabel htmlFor="car_mileage_to">To</MileageLabel>
            <MileageInput
              id="car_mileage_to"
              type="text"
              name="maxMileage"
              value={formData.maxMileage.toLocaleString("en-US")}
              onChange={handleMileageChange}
            ></MileageInput>
          </MileageWrapper>
        </MileagesContainer>
      </div>

      <BtnFilters type="submit">Search</BtnFilters>
      <BtnFilters type="button" onClick={handleReset}>
        Reset
      </BtnFilters>
    </FormStyled>
  );
};

export default FiltersForm;
