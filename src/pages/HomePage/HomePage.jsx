import { ContainerHero, LinkStyled, Span } from "./HomePage.styled";

const HomePage = () => {
  return (
    <section>
      <ContainerHero>
        <h1>
          Welcome to <Span>RentalCar</Span> Service!
        </h1>

        <LinkStyled to="/catalog">Car rental CATALOG</LinkStyled>
      </ContainerHero>
    </section>
  );
};

export default HomePage;
