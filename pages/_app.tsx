import * as React from 'react';

import '../styles/globals.css'

import 'react-notion-x/src/styles.css';
import 'prismjs/themes/prism-tomorrow.css'

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp;
