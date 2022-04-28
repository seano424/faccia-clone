import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  const devMode = process.env.NEXT_PUBLIC_DEV_MODE
  return (
    <Html className="scroll-smooth" lang="en">
      <Head />
      <body className={devMode ? 'debug-screens' : ''}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
