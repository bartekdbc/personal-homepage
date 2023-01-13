import {
  Button,
  Content,
  Image,
  MiniTitle,
  Text,
  Title,
  Wrapper,
} from "./styled";
import picture from "../images/picture.jpg";
import { ReactComponent as MessageIcon } from "../images/message.svg";

const Header = () => (
  <Wrapper>
    <Image src={picture} alt="Bartek" />
    <Content>
      <MiniTitle>this is</MiniTitle>
      <Title>Bartłomiej Dębiec</Title>
      <Text>
        👨‍💻 I'm a passionate Frontend Developer in love with React, currently
        looking for new job opportunities.
      </Text>
      <Button>
        <MessageIcon />
        Hire Me
      </Button>
    </Content>
  </Wrapper>
);

export default Header;
