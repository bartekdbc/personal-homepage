import styled from "styled-components";

export const StyledSection = styled.section`
  margin-bottom: 72px;
  padding: 32px;
  background-color: ${({ theme }) => theme.colors.boxBackground};
  border-radius: 4px;
  box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02),
    0px 16px 58px rgba(9, 10, 51, 0.03);

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    margin-bottom: 48px;
    padding: 16px 16px;
  }
`;

export const Title = styled.h2`
  font-size: 30px;
  font-weight: 900;
  margin: 0;
  padding: 0 0 16px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.titleUnderline};

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    font-size: 18px;
    padding: 0 0 12px;
  }
`;
