import styled from "styled-components";

export const CatalogList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  row-gap: 50px;
  column-gap: 29px;
`;

export const BtnLoadMore = styled.button`
  cursor: pointer;

  margin: 100px auto 0;
  display: block;

  color: var(--accent-color);
  background-color: transparent;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px; /* 150% */

  text-decoration-line: underline;
  border: none;

  transition: color var(--transition);

  &:hover,
  &:focus {
    color: var(--accent-hover-color);
  }
`;
