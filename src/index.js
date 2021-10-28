import 'normalize.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import EricssonGA628Woff from './fonts/EricssonGA628.woff';
import EricssonGA628Woff2 from './fonts/EricssonGA628.woff2';
import App from './App';
import reportWebVitals from './reportWebVitals';

const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'Ericsson GA628';
    src: url(${EricssonGA628Woff2}) format('woff2'),
      url(${EricssonGA628Woff}) format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  html {
    box-sizing: border-box;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
