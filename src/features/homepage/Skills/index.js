import { Bullet, Item, List, Title, Wrapper } from "./styled";
import { skills } from "../skillset";

const Skills = () => (
  <Wrapper>
    <Title>My skill set includes 🛠️</Title>
    <List>
      {skills.map(({ content }) => (
        <Item>
          <Bullet />
          {content}
        </Item>
      ))}
    </List>
  </Wrapper>
);

export default Skills;
