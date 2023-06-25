import { createGlobalStyle } from "styled-components";
import STYLES_CONFIG from "./styles.config";

const { color } = STYLES_CONFIG;

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    text-decoration: none;
  }

  body {
    margin: 0;
    font-family: 'Poppins', 'Open Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  ::placeholder {
    font-family: 'Poppins', 'Open Sans', sans-serif;
    color: ${color.gray};
    font-size: 16px;
  }

  select, button {
    font-family: 'Poppins', 'Open Sans', sans-serif;
  }
`;

export default GlobalStyles;
