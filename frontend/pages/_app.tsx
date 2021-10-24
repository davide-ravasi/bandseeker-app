import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

import GlobalStyle, { theme } from "../styles/globalStyles";
import "./_app.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // <ThemeProvider theme={theme}>
    //   <GlobalStyle />
    <Component {...pageProps} />
  );
}
export default MyApp;
