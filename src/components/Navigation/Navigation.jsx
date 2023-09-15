import { Nav, NavLinkStyled } from "./Navigation.styled";

const Navigation = () => {
  return (
    <Nav>
      <NavLinkStyled to="/">Home</NavLinkStyled>
      <NavLinkStyled to="/catalog">Catalog</NavLinkStyled>
      <NavLinkStyled to="/favorites">Favorites</NavLinkStyled>
    </Nav>
  );
};

export default Navigation;
