import { ListItem, StyledList } from "./styled";

const List = ({ listContent }) => (
  <StyledList>
    {listContent.map(({ id, content }) => (
      <ListItem key={id}>{content}</ListItem>
    ))}
  </StyledList>
);

export default List;
