import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <video autoPlay muted loop id='bgVideo'>
          <source src='/images/bg1.mp4' type='video/mp4' />
        </video>
        <NextScript />
      </body>
    </Html>
  );
}
