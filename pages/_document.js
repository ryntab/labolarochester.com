import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    const structuredData = {
      "@context":"http://schema.org",
      "@type":"Restaurant",
      "name":"La Bola",
      "description":"Experience the vibrant flavors of Spain and the Mediterranean at La Bola, a light fare restaurant and bar in downtown Rochester.",
      "url":"https://labolarochester.com",
      "image":"https://labolarochester.com/logo.png",
      "priceRange": "$$",
      "servesCuisine": "Spanish, Mediterranean",
      "openingHours": "Mo-Fri 11:30-20:00",
      "acceptsReservations": true,
      "menu": "https://labolarochester.com/#menu",
      "address":{
         "@type":"PostalAddress",
         "streetAddress":"240 East Main St.",
         "addressLocality":"Rochester",
         "addressRegion":"NY",
         "postalCode":"14604"
      },
      "telephone":"(585) 434-0044",
      "sameAs": ["https://www.instagram.com/labolarochester", "https://avvinorochester.com/labola"]
   };

    const scriptText = JSON.stringify(structuredData, null, 2);

    return (
      <Html lang="en">
        <Head>
          <meta charSet="UTF-8" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#000000" />
          <meta name="theme-color" content="#000000" />
          <link href="https://fonts.googleapis.com/css2?family=Playfair+Display&family=Roboto:wght@400;700&display=swap" rel="stylesheet" />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: ` ${JSON.stringify(structuredData, null, 2)}` }}
          />
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-9908RT5BYN"></script>
          <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-9908RT5BYN');
          `,
          }}
          />
        <link rel="stylesheet" href="./style.css"/>
        </Head>
        <body className="relative bg-[url(/bg2.jpg)] backdrop-filter bg-fixed bg-cover">
          <div className="absolute inset-0 opacity-100 z-[-1] bg-fixed bg-gradient-to-t from-black"></div>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
