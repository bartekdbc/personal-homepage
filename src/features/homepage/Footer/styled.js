import styled from "styled-components";

export const StyledFooter = styled.footer`
  max-width: 670px;
`;

export const Preheader = styled.p`
  font-size: 12px;
  font-weight: 700;
  line-height: 1.3;
  color: ${({ theme }) => theme.color.slateGray};
  text-transform: uppercase;
  margin-bottom: 24px;
`;

export const Contact = styled.a`
  font-size: 32px;
  font-weight: 900;
  color: ${({ theme }) => theme.color.black};
  text-decoration: none;
`;

export const Content = styled.p`
  margin: 24px 0 56px;
`;
