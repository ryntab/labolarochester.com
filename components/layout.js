import Head from 'next/head';
import Header from './header';

import { Analytics } from '@vercel/analytics/react';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
      </Head>
      <div className="mx-auto">
        <Header />
        <Analytics />
        <div className="max-w-7xl mx-auto">
          {children}
        </div>
      </div>
    </>
  );
}
