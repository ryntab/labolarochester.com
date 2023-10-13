import { Html, Head, Main, NextScript } from 'next/document';

const structuredData = {
  "@context": "http://schema.org",
  "@type": "Restaurant",
  "name": "La Bola",
  "description": "Experience the vibrant flavors of Spain and the Mediterranean at La Bola, a light fare restaurant and bar in downtown Rochester.",
  "url": "https://labolarochester.com",
  "image": "https://labolarochester.com/logo.png",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "240 East Main St.",
    "addressLocality": "Rochester",
    "addressRegion": "NY",
    "postalCode": "14604"
  },
  "telephone": "(585) 434-0044"
};

export default function Document() {
  return (
    <Html lang="en" className="">
        <Head>
            <meta charSet="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover"/>

            <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet"/>

            <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Roboto:wght@400;700&display=swap" rel="stylesheet"></link>

            <title>La Bola by Avvino</title>
            <meta name="description" content="Experience the vibrant flavors of Spain and the Mediterranean at La Bola, a light fare restaurant and bar with Spanish & Mediterranean influences in the heart of downtown Rochester." />

            <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
            <script type="text/javascript" async src="//l.getsitecontrol.com/p43e1mm7.js"></script>
        </Head>
<<<<<<< Updated upstream
        <body className="relative bg-[url(/bg2.jpg)] backdrop-filter bg-fixed bg-cover">
          <div className="absolute inset-0 opacity-100 z-[-1] bg-fixed bg-gradient-to-t from-slate-900"></div>
            <Main/>
            <NextScript />
=======
        <body className="relative backdrop-filter bg-white bg-fixed bg-cover">
          <div className=""></div>
          <Main />
          <NextScript />
>>>>>>> Stashed changes
        </body>
    </Html>
  );
}