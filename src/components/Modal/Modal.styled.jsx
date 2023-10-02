import styled from "styled-components";

export const ModalBackdrop = styled.div`
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(18, 20, 23, 0.5);
`;

export const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  min-height: 752px;
  max-width: 541px;
  width: 100%;
  padding: 40px;
  overflow-y: auto;
  background-color: var(--primary-white-color);
  border-radius: 24px;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
`;

export const BtnClose = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;

  cursor: pointer;

  width: 24px;
  height: 24px;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  color: var(--primary-black-color);
  background-color: var(--primary-white-color);
  border: none;
  border-radius: 50%;

  transition: color var(--transition), border var(--transition);

  &:hover,
  &:focus {
    color: var(--accent-hover-color);
    border: 1px solid var(--accent-hover-color);
  }
`;

export const SvgStyled = styled.svg`
  stroke: currentColor;
  // fill: currentColor;
`;

export const ImgDivStyled = styled.div`
  width: 461px;
  height: 248px;

  margin: 0 auto;

  background: url(<path-to-image>), lightgray 50% / cover no-repeat;
  border-radius: 14px;

  overflow: hidden;
`;

export const ImgStyled = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const NameDivStyled = styled.div`
  color: var(--primary-black-color);
  font-size: 18px;
  font-weight: 500;
  line-height: 24px; /* 150% */

  margin-top: 14px;
`;

export const ModelSpanStyled = styled.span`
  color: var(--accent-color);
`;

export const AdressTextStyled = styled.p`
  margin-top: 8px;
`;

export const TypeTextStyled = styled.p`
  margin-top: 4px;
`;

export const DescriptionSpanStyled = styled.span`
  color: var(--alternative-grey-color);
  line-height: 18px; /* 150% */

  &:not(:last-child):after {
    color: rgba(18, 20, 23, 0.1);
    content: "|";
    padding: 0 3px;
  }
`;

export const DescriptionTextStyled = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 20px; /* 142.857% */

  margin-top: 14px;
`;

export const AccessoriesTextStyled = styled.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 20px; /* 142.857% */

  margin-top: 24px;
`;

export const RentalTextStyled = styled.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 20px; /* 142.857% */

  margin-top: 24px;
`;

export const BtnRentalCarStyled = styled.button`
  cursor: pointer;

  width: 100%;
  max-width: 168px;
  height: 44px;
  // padding: 12px 50px;

  display: flex;
  justify-content: center;
  align-items: center;

  color: var(--primary-white-color);
  background-color: var(--accent-color);
  font-size: 14px;
  font-weight: 600;
  line-height: 20px; /* 142.857% */

  border-radius: 12px;
  border: none;

  margin-top: 24px;

  transition: background-color var(--transition);

  &:hover,
  &:focus {
    background-color: var(--accent-hover-color);
  }
`;

export const RentalMinAgeDivStyled = styled.div`
  display: flex;
  gap: 8px;

  margin-top: 15px;
`;

export const RentalDepositDivStyled = styled.div`
  display: flex;
  gap: 10px;

  margin-top: 8px;
`;

export const DescriptionRentalPStyled = styled.div`
  display: flex;
  padding: 7px 14px;
  justify-content: center;
  align-items: center;
  gap: 2px;

  border-radius: 35px;
  background: #f9f9f9;

  color: var(--secondary-black-color);
  font-size: 12px;
  font-weight: 400;
  line-height: 18px; /* 150% */
  letter-spacing: -0.24px;
`;

export const AccentSpanStyled = styled.span`
  color: var(--accent-color);
  font-weight: 600;
`;
