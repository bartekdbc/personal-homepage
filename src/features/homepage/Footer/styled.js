import styled from "styled-components";

export const StyledFooter = styled.footer`
  max-width: 670px;
`;

export const Preheader = styled.p`
  font-size: 12px;
  font-weight: 700;
  line-height: 1.3;
  color: ${({ theme }) => theme.colors.content.text};
  text-transform: uppercase;
  margin-bottom: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    margin-bottom: 12px;
  }
`;

export const Contact = styled.a`
  font-size: 32px;
  font-weight: 900;
  line-height: 39px;
  color: ${({ theme }) => theme.colors.textPrimary};
  text-decoration: none;
  transition: color 0.3s;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    font-size: 18px;
    line-height: 22px;
  }
`;

export const Content = styled.p`
  max-width: 670px;
  font-size: 18px;
  line-height: 1.4;
  margin: 24px 0 56px;

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    font-size: 14px;
    margin: 12px 0 40px;
  }
`;
