import { ThemeProvider } from "styled-components";
import { Normalize } from "styled-normalize";
import { GlobalStyle } from "./GlobalStyle";
import Homepage from "./features/homepage/Homepage";
import { themeDark, themeLight } from "./theme";
import { useSelector } from "react-redux";
import { selectIsDarkTheme } from "./common/ThemeSwitcher/themeSlice";

const App = () => {
  const isDarkTheme = useSelector(selectIsDarkTheme);

  return (
    <ThemeProvider theme={isDarkTheme ? themeDark : themeLight}>
      <Normalize />
      <GlobalStyle />
      <Homepage />
    </ThemeProvider>
  );
};

export default App;
