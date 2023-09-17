import { createPortal } from "react-dom";
import { useEffect } from "react";
import {
  getCityFromAddress,
  getCountryFromAddress,
  getMinAge,
  getDriverLicense,
  getSecurityDeposit,
  getFormatMileage,
  getFormatRentalPrice,
} from "../../helpers/utils";
import {
  ModalBackdrop,
  ModalContent,
  IconCloseStyled,
  ImgDivStyled,
  ImgStyled,
  NameDivStyled,
  ModelSpanStyled,
  AdressTextStyled,
  TypeTextStyled,
  DescriptionSpanStyled,
  DescriptionTextStyled,
  AccessoriesTextStyled,
  RentalTextStyled,
  BtnRentalCarStyled,
  RentalMinAgeDivStyled,
  RentalDepositDivStyled,
  DescriptionRentalPStyled,
  AccentSpanStyled,
} from "./Modal.styled";

// Портал - DOM-вузол, в який буде рендеритися модальне вікно
const modalRoot = document.querySelector("#modal-root");

const Modal = ({ car, onClose }) => {
  // Закриття модалки по ESC
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.code === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  // Закриття модалки по кліку на backdrop
  // target - на чому клікнули
  // currentTarget - на чому спрацював обробник подій
  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  const {
    id,
    year,
    make,
    model,
    type,
    img,
    description,
    accessories,
    fuelConsumption,
    engineSize,
    functionalities,
  } = car;
  const city = getCityFromAddress(car);
  const country = getCountryFromAddress(car);
  const minAge = getMinAge(car);
  const license = getDriverLicense(car);
  const deposit = getSecurityDeposit(car);
  const formatMileage = getFormatMileage(car);
  const formatRentalPrice = getFormatRentalPrice(car);

  return createPortal(
    <ModalBackdrop onClick={handleBackdropClick}>
      <ModalContent>
        {/* <BtnClose type="button" onClick={onClose}>
          <svg width="24" height="24" viewBox="0 0 24 24">
            <use href="../../assets/images/x.svg"></use>
          </svg>
        </BtnClose> */}
        <IconCloseStyled type="button" onClick={onClose}></IconCloseStyled>
        <ImgDivStyled>
          <ImgStyled src={img} alt={description} />
        </ImgDivStyled>
        <NameDivStyled>
          {make} <ModelSpanStyled>{model}</ModelSpanStyled>, {year}
        </NameDivStyled>
        <AdressTextStyled>
          <DescriptionSpanStyled>{city}</DescriptionSpanStyled>
          <DescriptionSpanStyled>{country}</DescriptionSpanStyled>
          <DescriptionSpanStyled>Id: {id}</DescriptionSpanStyled>
          <DescriptionSpanStyled>Year: {year}</DescriptionSpanStyled>
          <DescriptionSpanStyled>Type: {type}</DescriptionSpanStyled>
        </AdressTextStyled>
        <TypeTextStyled>
          <DescriptionSpanStyled>
            Fuel Consumption: {fuelConsumption}
          </DescriptionSpanStyled>
          <DescriptionSpanStyled>
            Engine Size: {engineSize}
          </DescriptionSpanStyled>
        </TypeTextStyled>
        <DescriptionTextStyled>{description}</DescriptionTextStyled>
        <AccessoriesTextStyled>
          Accessories and functionalities:
        </AccessoriesTextStyled>
        <AdressTextStyled>
          <DescriptionSpanStyled>{accessories[0]}</DescriptionSpanStyled>
          <DescriptionSpanStyled>{accessories[1]}</DescriptionSpanStyled>
          <DescriptionSpanStyled>{accessories[2]}</DescriptionSpanStyled>
        </AdressTextStyled>
        <TypeTextStyled>
          <DescriptionSpanStyled>{functionalities[0]}</DescriptionSpanStyled>
          <DescriptionSpanStyled>{functionalities[1]}</DescriptionSpanStyled>
          <DescriptionSpanStyled>{functionalities[2]}</DescriptionSpanStyled>
        </TypeTextStyled>
        <RentalTextStyled>Rental Conditions:</RentalTextStyled>

        <RentalMinAgeDivStyled>
          <DescriptionRentalPStyled>
            {minAge.key}: <AccentSpanStyled>{minAge.value}</AccentSpanStyled>
          </DescriptionRentalPStyled>
          <DescriptionRentalPStyled>{license}</DescriptionRentalPStyled>
        </RentalMinAgeDivStyled>

        <RentalDepositDivStyled>
          <DescriptionRentalPStyled>{deposit}</DescriptionRentalPStyled>
          <DescriptionRentalPStyled>
            Mileage: <AccentSpanStyled>{formatMileage}</AccentSpanStyled>
          </DescriptionRentalPStyled>
          <DescriptionRentalPStyled>
            Price: <AccentSpanStyled>{formatRentalPrice}</AccentSpanStyled>
          </DescriptionRentalPStyled>
        </RentalDepositDivStyled>

        <BtnRentalCarStyled type="button">
          <a href="tel:+380730000000">Rental car</a>
        </BtnRentalCarStyled>
      </ModalContent>
    </ModalBackdrop>,
    modalRoot
  );
};

export default Modal;
