import { Container } from "../../common/Container";
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
    </Container>
  );
}

export default Homepage;
