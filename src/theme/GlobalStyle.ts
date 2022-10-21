import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  // [Next.js Reset]
  html {
    display: flex;
    min-height: 100%;
    flex-direction: column;
  }
  body {
    display: flex;
    flex: 1;
    flex-direction: column;
    background-color: #0A0A0A;
    color: #FFFFFF;
  }
  #__next {
    width: 100%;
    overflow: hidden;
    display: flex;
    flex: 1;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-content: flex-start;
    flex-shrink: 0;
  }
  // ============
  // [Dark Mode Style]
  // body.dark {
  //   color: #FFFFFF;
  //   background-color: #111111;
  // }
  // ============
  // [Reset Style]
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;


export default GlobalStyle;