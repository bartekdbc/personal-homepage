import styled from "styled-components";

export const StyledList = styled.ul`
  font-size: 18px;
  color: ${({ theme }) => theme.color.slateGray};
  padding: 0;
  margin: 32px 0 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
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
    background-color: ${({ theme }) => theme.color.cornflowerBlue};
    border-radius: 50%;
    margin-right: 16px;
  }
`;
