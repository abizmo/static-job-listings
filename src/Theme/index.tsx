import React from 'react';
import { createGlobalStyle, css, ThemeProvider } from 'styled-components';

import theme from './theme';

const resetCss = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  body,
  h1,
  p {
    margin: 0;
    padding: 0;
  }
  h1 {
    line-height: 1.1;
  }
  body,
  button {
    font-family: ${theme.fontFamily};
  }
`;

const GlobalStyle = createGlobalStyle`
  ${resetCss}
  body {
    background-color: ${theme.colors[100]};
    color: ${theme.colors[500]};
    font-weight: 500;
    line-height: 1.5;
    height: 100vh;
  }
  #root:only-child {
    display: grid;
    grid-template-rows: 1fr min-content;
    height: 100vh;
  }
  main {
    place-self: center;
  }
`;

function Theme({ children }: any): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}

export default Theme;
