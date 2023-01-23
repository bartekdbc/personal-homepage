import styled from "styled-components";

export const StyledList = styled.ul`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.content.text};
  padding: 0;
  margin: 32px 0 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: ${({ theme }) => theme.breakpoint.large}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    font-size: 14px;
    margin: 12px 0 0;
  }
`;

export const ListItem = styled.li`
  line-height: 1.4;
  list-style: none;
  display: flex;
  margin: 0 0 8px;
  align-items: center;

  &:before {
    content: " ";
    display: inline-block;
    width: 9px;
    height: 9px;
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 50%;
    margin-right: 16px;

    @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
      width: 6px;
      height: 6px;
      margin-right: 8px;
    }
  }
`;
