import styled from "styled-components";
import { StyledSection } from "../../../../../common/Section/styled";

export const Wrapper = styled(StyledSection)`
  padding: 56px;
  border: 6px solid ${({ theme }) => theme.color.underlineGray};
`;

export const Tile = styled.div``;

export const Header = styled.h2`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 24px;
  color: ${({ theme }) => theme.color.scienceBlue};
`;

export const Description = styled.p`
  font-size: 18px;
  line-height: 1.4;
  color: ${({ theme }) => theme.color.slateGray};
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
`;

export const ListItem = styled.li``;
