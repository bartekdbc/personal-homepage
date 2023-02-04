import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 55px auto 109px;

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    margin: 32px auto;
  }
`;
