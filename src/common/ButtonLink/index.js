import styled from "styled-components";

export const ButtonLink = styled.a`
  color: ${({ theme }) => theme.colors.buttonLink.text};
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  border: 1px solid ${({ theme }) => theme.colors.buttonLink.border};
  padding: 12px 16px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.primary};
  display: inline-flex;
  align-items: center;
  gap: 16px;
  transition: box-shadow 0.5s;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    box-shadow: 2px -2px 0px ${({ theme }) => theme.colors.buttonLink.shadowHover},
      -2px 2px 0px ${({ theme }) => theme.colors.buttonLink.shadowHover},
      2px 2px 0px ${({ theme }) => theme.colors.buttonLink.shadowHover},
      -2px -2px 0px ${({ theme }) => theme.colors.buttonLink.shadowHover};
  }

  &:active {
    box-shadow: inset 0px 2px 0px rgba(20, 70, 32, 0.2);
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    font-size: 18px;
  }
`;
