import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import MainToolbar from '@stop-game-next-organisms/mainToolbar/mainToolbar';
import { ReactComponent as NxLogo } from '../public/nx-logo-white.svg';
import './styles.scss';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to stop-game-next!</title>
      </Head>
      <div className="app">
        <MainToolbar></MainToolbar>
        <main className="main_content">
          <Component {...pageProps} />
        </main>
      </div>
    </>
  );
}

export default CustomApp;
