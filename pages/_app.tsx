import type { AppProps } from "next/app";
import { cache } from "@emotion/css";
import { CacheProvider } from "@emotion/react";
import GlobalStyles from "@/styles/GlobalStyles";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CacheProvider value={cache}>
      <GlobalStyles />
      <Component {...pageProps} />
    </CacheProvider>
  );
}
