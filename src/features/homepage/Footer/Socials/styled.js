import styled from "styled-components";

export const StyledSocialIcon = styled.ul`
  display: flex;
  padding: 0;
  margin: 0;
  list-style: none;
`;

export const Item = styled.li`
  &:not(:last-child) {
    margin-right: 24px;

    @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
      margin-right: 16px;
    }
  }
`;

export const Link = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.textPrimary};
  transition: color 0.3s;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const styleIcon = (Icon) => styled(Icon)`
  width: 48px;

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    width: 32px;
  }
`;
