import styled from "styled-components";

export const StyledSocialIcon = styled.ul`
  display: flex;
  padding: 0;
  margin: 0;
  list-style: none;
`;

export const Item = styled.li`
  margin-right: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    margin-right: 16px;
  }
`;

export const Link = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.color.mineShaft};
  transition: color 0.3s;

  &:hover {
    color: ${({ theme }) => theme.color.scienceBlue};
  }
`;

export const styleIcon = (Icon) => styled(Icon)`
  width: 48px;

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    width: 32px;
  }
`;
