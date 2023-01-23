import styled from "styled-components";

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 32px;
  list-style: none;
  padding: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    grid-template-columns: 1fr;
    grid-gap: 16px;
  }
`;

export const Tile = styled.li`
  padding: 56px;
  margin: 0;
  background-color: ${({ theme }) => theme.colors.boxBackground};
  border: 6px solid ${({ theme }) => theme.colors.tile.border};
  box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02),
    0px 16px 58px rgba(9, 10, 51, 0.03);
  border-radius: 4px;
  transition: border-color 0.3s;

  &:hover {
    border: 6px solid ${({ theme }) => theme.colors.tile.borderHover};
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    padding: 24px;
  }
`;

export const Header = styled.h3`
  font-size: 24px;
  font-weight: 700;
  margin: 0 0 24px;
  color: ${({ theme }) => theme.colors.tile.header};

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    font-size: 16px;
    margin: 0 0 16px;
  }
`;

export const Description = styled.p`
  font-size: 18px;
  line-height: 1.4;
  margin: 0 0 24px;
  color: ${({ theme }) => theme.colors.content.text};

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    font-size: 14px;
    margin: 0 0 16px;
  }
`;

export const Links = styled.div`
  display: grid;
  grid-gap: 8px;
  font-size: 18px;

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    font-size: 14px;
    grid-gap: 10px;
  }
`;

export const LinksRow = styled.div`
  word-break: break-all;
`;

export const LinksTitle = styled.span`
  margin-right: 8px;
  color: ${({ theme }) => theme.colors.content.text};
`;

export const Link = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.tile.link};
  border-bottom: 1px solid ${({ theme }) => theme.colors.tile.linkUnderline};
  transition: border-bottom 0.3s;
  cursor: pointer;

  &:hover {
    border-bottom: 1px solid
      ${({ theme }) => theme.colors.tile.linkUnderlineHover};
  }
`;
