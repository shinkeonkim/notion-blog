import * as React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class CustomDocument extends Document {

  render() {
    return (
      <Html lang='ko'>
        <Head>
          <meta 
            httpEquiv="Content-Security-Policy" 
            content="upgrade-insecure-requests" 
          />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
