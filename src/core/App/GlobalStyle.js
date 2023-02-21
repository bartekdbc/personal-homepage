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
    transition: background 0.3s;
    font-family: 'Inter', sans-serif;
    color: ${({ theme }) => theme.colors.textPrimary};;
    padding: 16px;
    letter-spacing: 0.05em;
  }
`;
