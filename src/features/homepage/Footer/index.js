import { email } from "../email";
import Socials from "./Socials";
import { Contact, Content, Preheader, StyledFooter } from "./styled";

const Footer = () => {
  return (
    <StyledFooter>
      <Preheader>let's talk!</Preheader>
      <Contact href={`mailto:${email}`} title={email} rel="noopener noreferrer">
        bartekdbc@gmail.com
      </Contact>
      <Content>
        I'am always open to new projects whenever I have the time. If you have a
        website, dashboard or mobile app in mind and need some help to make your
        ideas come to life, feel free to contact me. ✌️
      </Content>
      <Socials></Socials>
    </StyledFooter>
  );
};

export default Footer;
