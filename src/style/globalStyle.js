import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  :root {
    --blue: hsl(246, 80%, 60%);
    --blue-soft: ; hsl(195, 74%, 62%);
    --blue-pale: hsl(236, 100%, 87%);
    --blue-desat: hsl(235, 45%, 61%);
    --blue-dark: hsl(235, 46%, 20%);
    --blue-darker: hsl(226, 43%, 10%);
    --red: hsl(348, 100%, 68%);
    --green: hsl(145, 58%, 55%);
    --orange: hsl(43, 84%, 65%);
    --violet: hsl(264, 64%, 52%);
  }
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }
  html, body {
    height: 100vh;
    width: 100%;
    overflow-x: hidden;
  }
  body {
    font-family: 'Rubik', sans-serif;
    font-size: 18px;
  }
`;

export default GlobalStyle;