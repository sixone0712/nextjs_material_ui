import Head from 'next/head';
import { GlobalStyles, css } from 'twin.macro';
import { Global } from '@emotion/react';
import { AppProps } from 'next/app';
import { CssBaseline } from '@mui/material';
import { useEffect } from 'react';

const App = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    console.log('jssStyles', jssStyles);
    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Head>
        <title>
          Nextjs App with TypeScript, ESlint, Jest, Emotion, Tailwind and Twin
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <GlobalStyles /> */}
      {/* <Global styles={globalStyles} /> */}
      <CssBaseline />
      <Component {...pageProps} />
    </>
  );
};

const globalStyles = css`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  * {
    box-sizing: border-box;
  }
`;

export default App;
