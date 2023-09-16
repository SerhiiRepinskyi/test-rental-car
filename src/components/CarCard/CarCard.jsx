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
} from "./CarCard.styled";

const CarCard = ({ car, carIsFavorite, onToggleFavorite, onLearnMore }) => {
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
        {/* {carIsFavorite ? (
            <StyledActiveIcon
              onClick={() => onToggleFavorite(car, carIsFavorite)}
            />
          ) : (
            <StyledNormalIcon
              onClick={() => onToggleFavorite(car, carIsFavorite)}
            />
          )} */}
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
