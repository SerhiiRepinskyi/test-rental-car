import Navigation from "../Navigation";
import { Header, ContainerHeader, LinkStyled } from "./AppBar.styled";

const AppBar = () => {
  return (
    <Header>
      <ContainerHeader>
        <LinkStyled to="/">RentalCar</LinkStyled>

        <Navigation />
      </ContainerHeader>
    </Header>
  );
};

export default AppBar;
