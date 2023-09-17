import styled from "styled-components";
import { Link } from "react-router-dom";

export const Header = styled.header`
  box-shadow: 0px 25px 25px -30px rgba(32, 32, 135, 0.7);

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: white;
  z-index: 999;
`;

export const ContainerHeader = styled.div`
  height: 70px;

  max-width: 1200px;
  margin: 0 auto;
  padding: 0 8px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 20px;
  font-weight: 600;
`;

export const LinkStyled = styled(Link)`
  text-decoration: none;

  &:hover,
  &:focus {
    color: var(--accent-hover-color);
  }
`;
