import { Description, Header, List, ListItem, Wrapper } from "./styled";

const PortfolioSuccess = () => (
  <Wrapper>
    <Header>Movies Browser</Header>
    <Description>
      Project description, e.g. website where you can search for favourite
      movies and people. Project description, e.g. website where you can search.
    </Description>
    <List>
      <ListItem> Demo: https://link.demo.com </ListItem>
      <ListItem> Code: https://link.code.com</ListItem>
    </List>
  </Wrapper>
);

export default PortfolioSuccess;
