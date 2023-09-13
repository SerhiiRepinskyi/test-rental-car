import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  gap: 35px;
  align-items: center;
`;

export const NavLinkStyled = styled(NavLink)`
  display: flex;
  gap: 4px;
  align-items: flex-end;
  padding: 4px 0;
  text-decoration: none;

  &:hover,
  &:focus {
    // color: #2196f3;
    color: #62ada0;
  }

  &.active {
    // color: #2196f3;
    color: #62ada0;
    border-bottom: 2px solid #62ada0;
  }
`;
