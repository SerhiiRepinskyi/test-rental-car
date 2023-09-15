import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Nav = styled.nav`
  display: flex;
  gap: 40px;
`;

export const NavLinkStyled = styled(NavLink)`
  text-decoration: none;

  &:hover,
  &:focus {
    color: var(--accent-hover-color);
  }

  &.active {
    color: var(--accent-hover-color);
    border-bottom: 2px solid var(--accent-hover-color);
  }
`;
