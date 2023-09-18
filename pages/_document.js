import { Html, Head, Main, NextScript } from 'next/document'
 
export default function Document() {
  return (
    <Html lang="en" className="">
        <Head>
            <meta charset="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover"/>
            <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet"/>
            <title>Fixed Background Image with Tailwind CSS</title>
        </Head>
        <body className="relative bg-[url(/bg2.jpg)] backdrop-filter bg-fixed bg-cover">
          <div class="absolute inset-0 opacity-100 z-[-1] bg-fixed bg-gradient-to-t from-slate-900"></div>
            <Main/>
            <NextScript />
        </body>
    </Html>
  )
}