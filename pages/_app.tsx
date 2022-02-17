import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import { UserProvider } from "@auth0/nextjs-auth0";

import { theme } from "../styles/theme.styles";
import "./_app.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <ThemeProvider theme={theme}>
        <Head>
          <meta charset="UTF-8" />
          <meta
            name="keywords"
            content="bandseeker, band, musicians, searching"
          />
          <meta name="author" content="davide Ravasi" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </Head>
        <Component {...pageProps} />
      </ThemeProvider>
    </UserProvider>
  );
}
export default MyApp;
