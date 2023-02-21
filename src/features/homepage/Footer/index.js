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
        I'm always open to new projects and ideas. If you are looking for
        a&nbsp;committed team member with great analytical skills and a passion
        for&nbsp;teamwork, feel free to contact me. 📩
      </Content>
      <Socials></Socials>
    </StyledFooter>
  );
};

export default Footer;
