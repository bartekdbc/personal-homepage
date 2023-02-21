import { Content, Image, MiniTitle, Text, Title, Wrapper } from "./styled";
import picture from "./images/picture.jpg";
import { ReactComponent as MessageIcon } from "./images/message.svg";
import { email } from "../email";
import { ButtonLink } from "../../../common/ButtonLink";

const Header = () => (
  <Wrapper>
    <Image src={picture} alt="Bartlomiej Debiec" />
    <Content>
      <MiniTitle>this is</MiniTitle>
      <Title>Bartlomiej Debiec</Title>
      <Text>
        🌐👨🏻‍💻 I'm an enthusiastic Frontend Developer who is passionate about new
        technologies and dedicated to learning React. Highly motivated fast
        learner currently looking for new job opportunities. 💡
      </Text>
      <ButtonLink
        href={`mailto:${email}`}
        title={email}
        rel="noopener noreferrer"
      >
        <MessageIcon />
        Hire Me
      </ButtonLink>
    </Content>
  </Wrapper>
);

export default Header;
