import styled from "styled-components";
import { Link } from "react-router-dom";
import heroBackgroundImage from "../../assets/images/hero-cars-city.jpg";

export const ContainerHero = styled.div`
  width: 100%;
  height: 100vh;
  
  padding: 180px;

  text-align: center;

  background-color: #c4c4c4;
  background-image: linear-gradient(rgba(47, 48, 58, 0.4), rgba(47, 48, 58, 0.4)),
    url(${heroBackgroundImage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  }
`;

export const Span = styled.span`
  color: var(--accent-color)
  }
`;

export const LinkStyled = styled(Link)`
  cursor: pointer;

  width: 100%;
  max-width: 160px;
  height: 44px;

  display: flex;
  justify-content: center;
  align-items: center;

  text-decoration: none;

  color: var(--primary-white-color);
  background-color: var(--accent-color);
  font-size: 20px;
  font-weight: 600;
  line-height: 20px; /* 142.857% */

  border-radius: 12px;
  border: none;

  transition: background-color var(--transition);

  &:hover,
  &:focus {
    background-color: var(--accent-hover-color);
  }
`;

export const WrapperDiv = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  margin-top: 36px;

  color: var(--primary-black-color);
  font-size: 24px;
  font-weight: 600;
`;
