import { ContainerHero, WrapperDiv, LinkStyled, Span } from "./HomePage.styled";

const HomePage = () => {
  return (
    <section>
      <ContainerHero>
        <h1>
          Welcome to <Span>RentalCar</Span> Service!
        </h1>

        <WrapperDiv>
          <p>Car rental</p>
          <LinkStyled to="/catalog">Catalog</LinkStyled>
        </WrapperDiv>
      </ContainerHero>
    </section>
  );
};

export default HomePage;
