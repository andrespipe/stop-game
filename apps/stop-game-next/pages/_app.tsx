import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import MainToolbar from '@stop-game-next-organisms/mainToolbar/mainToolbar';
import { ReactComponent as NxLogo } from '../public/nx-logo-white.svg';
// import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to stop-game-next!</title>
      </Head>
      <div className="app">
        <MainToolbar></MainToolbar>
        {/* <header className="flex">
          <NxLogo width="75" height="50" />
          <h1>Welcome to stop-game-next!</h1>
        </header>
        <main>
          <Component {...pageProps} />
        </main> */}
      </div>
    </>
  );
}

export default CustomApp;
