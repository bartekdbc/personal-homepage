import styled from "styled-components";

export const StyledSection = styled.section`
  margin: 0 0 72px;
  padding: 32px 32px 24px;
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 4px;
  box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02),
    0px 16px 58px rgba(9, 10, 51, 0.03);
`;

export const Title = styled.h2`
  font-size: 30px;
  font-weight: 900;
  margin: 0;
  padding: 0 0 16px;
  border-bottom: 1px solid rgba(209, 213, 218, 0.3);
`;
