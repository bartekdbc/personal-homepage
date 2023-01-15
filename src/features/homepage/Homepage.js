import { Container } from "../../common/Container";
import Footer from "./Footer";
import FutureSkills from "./FutureSkills";
import Header from "./Header";
import Portfolio from "./Portfolio";
import Skills from "./Skills";

function Homepage() {
  return (
    <Container>
      <Header />
      <Skills />
      <FutureSkills />
      <Portfolio />
      <Footer />
    </Container>
  );
}

export default Homepage;
