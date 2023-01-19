import { ReactComponent as PortfolioIcon } from "./portfolio.svg";
import styled from "styled-components";

export const Section = styled.section`
  margin-bottom: 120px;

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    margin-bottom: 48px;
  }
`;

export const Header = styled.header`
  text-align: center;
  margin-bottom: 24px;
`;

export const Icon = styled(PortfolioIcon)`
  width: 40px;

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    width: 32px;
  }
`;

export const Subheader = styled.h2`
  font-size: 30px;
  font-weight: 900;
  margin: 13px 0 8px;

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    font-size: 18px;
    margin: 13px 0 16px;
  }
`;

export const Title = styled.h3`
  font-size: 20px;
  font-weight: 400;
  line-height: 1.4;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    font-size: 17px;
  }
`;
