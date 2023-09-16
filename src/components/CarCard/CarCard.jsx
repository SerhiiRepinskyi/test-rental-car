import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectFavoriteCars } from "../../redux/selectors";
import { addToFavorites, removeFromFavorites } from "../../redux/carsSlice";
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
  HeartNormalIcon,
  HeartActiveIcon,
} from "./CarCard.styled";

const CarCard = ({ car, onLearnMore }) => {
  const dispatch = useDispatch();
  const favoriteCars = useSelector(selectFavoriteCars);

  const carIsFavorite = favoriteCars.includes(car.id);

  const handleToggleFavorite = () => {
    if (carIsFavorite) {
      dispatch(removeFromFavorites(car.id));
    } else {
      dispatch(addToFavorites(car.id));
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
    rentalPrice,
    rentalCompany,
    address,
    accessories,
  } = car;
  const city = address.split(",")[1];
  const country = address.split(",")[2];

  return (
    <CardDivStyled>
      <ImgDivStyled>
        <ImgStyled src={img} alt={description} />

        {carIsFavorite ? (
          <HeartActiveIcon onClick={handleToggleFavorite} />
        ) : (
          <HeartNormalIcon onClick={handleToggleFavorite} />
        )}
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

      <BtnLearnMoreStyled onClick={() => onLearnMore(id)}>
        Learn more
      </BtnLearnMoreStyled>
    </CardDivStyled>
  );
};

export default CarCard;
