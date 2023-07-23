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
        <body className="bg-black">
            <Main />
            <NextScript />
        </body>
    </Html>
  )
}