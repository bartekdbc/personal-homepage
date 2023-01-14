import styled from "styled-components";

export const Container = styled.div`
  max-width: 1200px;
  margin: 115px auto 109px;

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    margin: 32px auto;
  }
`;
