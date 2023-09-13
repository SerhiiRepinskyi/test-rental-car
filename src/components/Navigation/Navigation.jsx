import { Nav, NavLinkStyled } from "./Navigation.styled";

const Navigation = () => {
  return (
    <div>
      <Nav>
        <NavLinkStyled to="/">Home</NavLinkStyled>
        <NavLinkStyled to="/catalog">Catalog</NavLinkStyled>
        <NavLinkStyled to="/favorites">Favorites</NavLinkStyled>
      </Nav>
    </div>
  );
};

export default Navigation;
