import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *, ::after, ::before {
    box-sizing: inherit;
  }

  body {
    background-color: ${({ theme }) => theme.colors.content.background};
    font-family: 'Inter', sans-serif;
    color: ${({ theme }) => theme.colors.content.text};;
    padding: 16px;
    letter-spacing: 0.05em;
  }
`;
