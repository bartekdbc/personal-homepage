import { Container } from "../../common/Container";
import ThemeSwitcher from "../../common/ThemeSwitcher";
import Footer from "./Footer";
import FutureSkills from "./FutureSkills";
import Header from "./Header";
import Portfolio from "./Portfolio";
import Skills from "./Skills";

function Homepage() {
  return (
    <Container>
      <ThemeSwitcher />
      <Header />
      <Skills />
      <FutureSkills />
      <Portfolio />
      <Footer />
    </Container>
  );
}

export default Homepage;
