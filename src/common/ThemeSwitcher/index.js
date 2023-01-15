import {
  Container,
  StyledThemeSwitcher,
  SunBackground,
  SunIcon,
  Switcher,
  Text,
} from "./styled";

const ThemeSwitcher = () => (
  <Container>
    <StyledThemeSwitcher>
      <Text>Dark Mode OFF</Text>
      <Switcher>
        <SunBackground>
          <SunIcon />
        </SunBackground>
      </Switcher>
    </StyledThemeSwitcher>
  </Container>
);

export default ThemeSwitcher;
