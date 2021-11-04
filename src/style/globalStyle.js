import { createGlobalStyle } from 'styled-components';
import breakpoints from './breakpoints';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  :root {
    --blue: hsl(246, 80%, 60%);
    --blue-soft: hsl(195, 74%, 62%);
    --blue-pale: hsl(236, 100%, 87%);
    --blue-desat: hsl(235, 45%, 61%);
    --blue-desat-hover: hsla(236, 41%, 34%, 1);
    --blue-dark: hsl(235, 46%, 20%);
    --blue-darker: hsl(226, 43%, 10%);
    --orange: hsl(15, 100%, 70%);
    --pink: hsl(348, 100%, 68%);
    --green: hsl(145, 58%, 55%);
    --yellow: hsl(43, 84%, 65%);
    --violet: hsl(264, 64%, 52%);
    --white: #fff;
    --curved-border: 15px;
  }
  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
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
    text-rendering: optimizeLegibility;
  }
  body {
    font-family: 'Rubik', sans-serif;
    font-size: 18px;
    color: var(--white);
    background: var(--blue-darker);
    font-weight: 300;
  }
  h1 {
    font-size: 1.3em;
    line-height: 1.167;
  }
  h2 {
    font-weight: 500;
  }
  p {
    line-height: 1;
  }

  @media screen and ${breakpoints.l} {
    #root {
      height: 100%;
      display: flex;
      align-items: center;
    }
  }
`;

export default GlobalStyle;