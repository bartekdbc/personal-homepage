import { Description, Header, List, ListItem, Tile, Wrapper } from "./styled";

const PortfolioSuccess = ({ portfolio }) => (
  <Wrapper>
    {portfolio?.map(({ id, name, description, homepage, html_url }) => (
      <Tile key={id}>
        <Header>{name}</Header>
        <Description>{description}</Description>
        <List>
          <ListItem> Demo: {homepage} </ListItem>
          <ListItem> Code: {html_url}</ListItem>
        </List>
      </Tile>
    ))}
  </Wrapper>
);

export default PortfolioSuccess;
