// import FullLayout from '@/layouts/dashboard/DashboardLayout';
// import "@styles/globals.css";
import fetcher from "../common/helper/fetchJson";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import type { AppProps } from "next/app";
import Head from "next/head";
import { SWRConfig } from "swr";

import createEmotionCache from "../common/utils/createEmotionCache";
import ThemeProvider from "../theme";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function App(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        {/* <FullLayout>{<Component {...pageProps} />}</FullLayout> */}

        <SWRConfig
          value={{
            fetcher: fetcher,
            onError: (err) => {
              console.error(err);
            },
          }}
        >
          {<Component {...pageProps} />}
        </SWRConfig>
      </ThemeProvider>
    </CacheProvider>
  );
}
