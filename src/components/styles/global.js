import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap');

  body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90vh;
    width: 90vw;
    font-size: 18px;
    font-family: 'Lato', sans-serif;
    font-weight: 400;
  }
`;

export default GlobalStyles;
