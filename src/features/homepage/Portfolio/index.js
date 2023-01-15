import { Header, Icon, Section, Subheader, Title } from "./styled";
import Tile from "./Tile";

const Portfolio = () => {
  return (
    <Section>
      <Header>
        <Icon></Icon>
        <Subheader>Portfolio</Subheader>
        <Title>My recent projects</Title>
      </Header>
      <Tile></Tile>
    </Section>
  );
};

export default Portfolio;
