import { Content, Image, MiniTitle, Text, Title, Wrapper } from "./styled";
import picture from "./images/picture.jpg";
import { ReactComponent as MessageIcon } from "./images/message.svg";
import { email } from "../email";
import { ButtonLink } from "../../../common/ButtonLink";
import ThemeSwitcher from "../../../common/ThemeSwitcher";

const Header = () => (
  <Wrapper>
    <ThemeSwitcher />
    <Image src={picture} alt="Bartek" />
    <Content>
      <MiniTitle>this is</MiniTitle>
      <Title>Bartłomiej Dębiec</Title>
      <Text>
        👨‍💻 I'm a enthusiastic Frontend Developer who is passionate about new
        technologies, artificial inteligence and science. Javascript is my
        Language, React is how I speak. Highly motivated, currently looking for
        new job opportunities.
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
