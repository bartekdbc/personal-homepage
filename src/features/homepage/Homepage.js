import { Container } from "../../common/Container";
import FutureSkills from "./FutureSkills";
import Header from "./Header";
import Skills from "./Skills";

function Homepage() {
  return (
    <Container>
      <Header />
      <Skills />
      <FutureSkills />
    </Container>
  );
}

export default Homepage;
