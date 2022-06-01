import * as React from 'react';

import { prefix } from '../utils/config.util';
import { BlogProvider } from "../utils/context.util";

import '../styles/globals.css'

import 'react-notion-x/src/styles.css';
import 'prismjs/themes/prism-tomorrow.css'

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <BlogProvider value={ { prefix } }>
      <Component {...pageProps} />
    </BlogProvider>
  )
}

export default MyApp;
