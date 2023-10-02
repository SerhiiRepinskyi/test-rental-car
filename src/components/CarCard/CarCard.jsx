import { React, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectFavoriteCars } from "../../redux/selectors";
import { addToFavorites, removeFromFavorites } from "../../redux/carsSlice";
import Modal from "../Modal";
import { getCityFromAddress, getCountryFromAddress } from "../../helpers/utils";
import icon from "../../assets/sprite-icons.svg";
import {
  CardDivStyled,
  ImgDivStyled,
  ImgStyled,
  NameDivStyled,
  ModelSpanStyled,
  AdressTextStyled,
  DescriptionSpanStyled,
  TypeTextStyled,
  BtnLearnMoreStyled,
  BtnFavorite,
  SvgStyled,
} from "./CarCard.styled";

const CarCard = ({ car }) => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const favoriteCars = useSelector(selectFavoriteCars);

  const {
    id,
    year,
    make,
    model,
    type,
    img,
    description,
    rentalPrice,
    rentalCompany,
    accessories,
  } = car;
  const city = getCityFromAddress(car);
  const country = getCountryFromAddress(car);

  const carIsFavorite = favoriteCars.some(
    (favoriteCar) => favoriteCar.id === car.id
  );

  const handleToggleFavorite = () => {
    if (carIsFavorite) {
      dispatch(removeFromFavorites(car));
    } else {
      dispatch(addToFavorites(car));
    }
  };

  // Відкрити модалку
  const showModal = (car) => {
    setIsModalOpen(true);
  };

  // Закрити модалку
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const favoriteIcon = carIsFavorite ? "heart-active" : "heart-normal";

  return (
    <>
      <CardDivStyled>
        <ImgDivStyled>
          <ImgStyled src={img} alt={description} />

          <BtnFavorite
            type="button"
            onClick={handleToggleFavorite}
            aria-label={
              carIsFavorite ? "Remove from favorites" : "Add to favorites"
            }
          >
            <SvgStyled width="18" height="18">
              <use href={`${icon}#${favoriteIcon}`}></use>
            </SvgStyled>
          </BtnFavorite>
        </ImgDivStyled>

        <NameDivStyled>
          <div>
            {make} <ModelSpanStyled>{model}</ModelSpanStyled>, {year}
          </div>

          <p>{rentalPrice}</p>
        </NameDivStyled>

        <AdressTextStyled>
          <DescriptionSpanStyled>{city}</DescriptionSpanStyled>
          <DescriptionSpanStyled>{country}</DescriptionSpanStyled>
          <DescriptionSpanStyled>{rentalCompany}</DescriptionSpanStyled>
        </AdressTextStyled>

        <TypeTextStyled>
          <DescriptionSpanStyled>{type}</DescriptionSpanStyled>
          <DescriptionSpanStyled>{model}</DescriptionSpanStyled>
          <DescriptionSpanStyled>{id}</DescriptionSpanStyled>
          <DescriptionSpanStyled>{accessories[0]}</DescriptionSpanStyled>
        </TypeTextStyled>

        <BtnLearnMoreStyled type="button" onClick={() => showModal(car)}>
          Learn more
        </BtnLearnMoreStyled>
      </CardDivStyled>

      {/* Модальне вікно для відображення детальної картки */}
      {isModalOpen && <Modal car={car} onClose={closeModal}></Modal>}
    </>
  );
};

export default CarCard;
