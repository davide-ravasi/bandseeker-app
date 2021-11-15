import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { UserProvider } from '@auth0/nextjs-auth0';

import GlobalStyle from "../styles/globalStyles";
import { theme } from "../styles/theme.styles";
import "./_app.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </UserProvider>
  );
}
export default MyApp;
