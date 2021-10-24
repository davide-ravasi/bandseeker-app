import { createGlobalStyle } from "styled-components";
import pala from "./assets/pala.ttf";

export const theme = {
  primaryBlue: "#0794B4",
  secondaryBlue: "#043157",
  primaryWhite: "#fff",
};

// 2. interpolate it using tagged template literals
const GlobalStyle = createGlobalStyle`

  
  @font-face {
    font-family: Advent Pro;
    src: url('https://fonts.googleapis.com/css2?family=Advent+Pro:wght@100&display=swap');

  }
  @font-face {
    font-family: Lato;
    src: url('https://fonts.googleapis.com/css2?family=Lato&display=swap');

  }


  @font-face {
    font-family: Roboto;
    src: url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

  }

  body {
    font-family: 'Advent Pro'
  }
  html {
    font-size: 10px;
  }
`;

export default GlobalStyle;
