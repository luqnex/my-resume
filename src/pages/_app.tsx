import type { AppProps } from "next/app";

import Head from "next/head";

import "../styles/styles.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Lucas Costa</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
