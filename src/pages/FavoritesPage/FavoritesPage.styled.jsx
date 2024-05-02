import styled from "styled-components";

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0px 8px 150px;

  text-align: center;

  // outline: 2px solid red;
`;

export const BaseTextSkeleton = styled.p`
  text-align: center;
  font-size: 18px;
  font-weight: 600;
  line-height: calc(24 / 18);
`;

export const TextSkeleton = styled(BaseTextSkeleton)`
  margin-top: 270px;
`;

export const TextSkeletonFilter = styled(BaseTextSkeleton)`
  margin-top: 120px;
`;
