import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 0 auto 109px;

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    margin: 0 auto 32px;
  }
`;
