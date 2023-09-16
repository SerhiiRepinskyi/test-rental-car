import styled from "styled-components";

export const CardDivStyled = styled.div`
  display: flex;
  width: 274px;
  height: 426px;
  flex-direction: column;
  align-items: flex-start;
  flex-shrink: 0;
`;

export const ImgDivStyled = styled.div`
  // width: 274px;
  height: 268px;

  display: flex;
  flex-shrink: 0;

  border-radius: 14px;
  background: linear-gradient(
      180deg,
      rgba(18, 20, 23, 0.5) 2.5%,
      rgba(18, 20, 23, 0) 41.07%
    ),
    #f3f3f2;

  overflow: hidden;
`;

export const ImgStyled = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

// export const StyledNormalIcon = styled(normalIcon)`
//   position: absolute;
//   top: 14px;
//   right: 14px;
// `;

// export const StyledActiveIcon = styled(activeIcon)`
//   position: absolute;
//   top: 14px;
//   right: 14px;
// `;

export const NameDivStyled = styled.div`
  width: 274px;
  display: flex;
  justify-content: space-between;

  color: var(--primary-black-color);
  font-size: 16px;
  font-weight: 500;
  line-height: 24px; /* 150% */

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  margin-top: 14px;
`;

export const ModelSpanStyled = styled.span`
  color: var(--accent-color);
`;

export const AdressTextStyled = styled.p`
  display: flex;
  width: 270px;
  margin-top: 8px;
`;

export const TypeTextStyled = styled.p`
  display: flex;
  width: 270px;
  margin-top: 4px;
`;

export const DescriptionSpanStyled = styled.span`
  color: var(--alternative-grey-color);
  line-height: 18px; /* 150% */

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  // flex-shrink: 1;

  &:not(:last-child):after {
    color: rgba(18, 20, 23, 0.1);
    content: "|";
    padding: 0 2px;
  }
`;

export const BtnLearnMoreStyled = styled.button`
  cursor: pointer;

  width: 100%;
  max-width: 274px;
  height: 44px;
  // padding: 12px 99px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  color: var(--primary-white-color);
  background-color: var(--accent-color);
  font-size: 14px;
  font-weight: 600;
  line-height: 20px; /* 142.857% */

  border-radius: 12px;
  border: none;

  margin-top: 28px;

  transition: background-color var(--transition);

  &:hover,
  &:focus {
    background-color: var(--accent-hover-color);
  }
`;
