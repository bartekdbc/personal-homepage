import { useDispatch, useSelector } from "react-redux";
import {
  Container,
  StyledThemeSwitcher,
  SunBackground,
  SunIcon,
  Switcher,
  Text,
} from "./styled";
import { selectIsDarkTheme, toggleTheme } from "./themeSlice";

const ThemeSwitcher = () => {
  const isDarkTheme = useSelector(selectIsDarkTheme);
  const dispatch = useDispatch();

  return (
    <Container>
      <StyledThemeSwitcher>
        <Text>Dark Mode {isDarkTheme ? "On" : "Off"}</Text>
        <Switcher onClick={() => dispatch(toggleTheme())}>
          <SunBackground moveToRight={isDarkTheme}>
            <SunIcon />
          </SunBackground>
        </Switcher>
      </StyledThemeSwitcher>
    </Container>
  );
};

export default ThemeSwitcher;
