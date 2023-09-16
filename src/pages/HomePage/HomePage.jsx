import { Container, LinkStyled, Span } from "./HomePage.styled";

const HomePage = () => {
  return (
    <section>
      <Container>
        <h1>
          Welcome to <Span>RentalCar</Span> Service!
        </h1>

        <LinkStyled to="/catalog">Car rental CATALOG</LinkStyled>
      </Container>
    </section>
  );
};

export default HomePage;
