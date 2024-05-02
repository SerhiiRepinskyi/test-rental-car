import styled from "styled-components";

export const FormStyled = styled.form`
  margin: 0 auto;
  padding: 150px 0px 50px;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-end;
  gap: 18px;
`;

export const LabelStyled = styled.label`
  display: block;
  margin-bottom: 8px;
  color: #8a8a89;
  font-size: 14px;
  font-weight: 500;
  line-height: calc(18 / 14);
  text-align: left;
`;

export const TextMileage = styled.p`
  display: block;
  margin-bottom: 8px;
  color: #8a8a89;
  font-size: 14px;
  font-weight: 500;
  line-height: calc(18 / 14);
  text-align: left;
`;

export const MileagesContainer = styled.div`
  display: flex;

  & :not(:last-child):is(div) {
    border-right: 1px solid rgba(138, 138, 137, 0.2);
    border-radius: 14px 0px 0px 14px;
    overflow: hidden;
  }

  & :not(:first-child):is(div) {
    border-radius: 0px 14px 14px 0px;
    overflow: hidden;
  }
`;

export const MileageWrapper = styled.div`
  position: relative;
`;

export const MileageLabel = styled.label`
  position: absolute;
  top: 50%;
  left: 22px;
  transform: translateY(-57%);
  font-size: 18px;
  font-weight: 500;
  line-height: calc(20 / 18);
`;

export const MileageInput = styled.input`
  width: 160px;
  // height: 48px;
  padding: 14px 24px 14px 70px;
  background: #f7f7fb;
  font-size: 18px;
  font-weight: 500;
  line-height: calc(20 / 18);
  border: none;

  &:focus {
    outline: 0px;
    // outline: 2px solid #2684ff;
    // box-shadow: 0 0 0 1px #2684ff;
  }
`;

export const BtnFilters = styled.button`
  cursor: pointer;

  width: 100%;
  max-width: 136px;
  height: 48px;
  // padding: 14px 44px;

  display: flex;
  justify-content: center;
  align-items: center;

  color: var(--primary-white-color);
  background-color: var(--accent-color);
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0%;

  border-radius: 12px;
  border: none;

  transition: background-color var(--transition);

  &:hover,
  &:focus {
    background-color: var(--accent-hover-color);
  }
`;
