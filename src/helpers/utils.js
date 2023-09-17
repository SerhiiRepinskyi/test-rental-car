export const getCityFromAddress = (advert) => {
  return advert.address.split(",")[1];
};

export const getCountryFromAddress = (advert) => {
  return advert.address.split(",")[2];
};

export const getMinAge = (advert) => {
  const conditionsArray = advert.rentalConditions.split("\n");
  const [key, value] = conditionsArray[0].split(": ");
  return {
    key,
    value,
  };
};

export const getDriverLicense = (advert) => {
  const conditionsArray = advert.rentalConditions.split("\n");
  return conditionsArray[1];
};

export const getSecurityDeposit = (advert) => {
  const conditionsArray = advert.rentalConditions.split("\n");
  return conditionsArray[2];
};

export const getFormatMileage = (advert) => {
  return advert.mileage.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const getFormatRentalPrice = (advert) => {
  const currencySymbol = advert.rentalPrice.charAt(0);
  const numericPart = advert.rentalPrice.slice(1);
  return `${numericPart}${currencySymbol}`;
};
