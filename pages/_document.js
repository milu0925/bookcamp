import { Html, Head, Main, NextScript } from "next/document";
import { i18n } from "../next-i18next.config.js";
export default function Document() {
  const defaultlang = i18n.defaultLocale;
  return (
    <Html lang={defaultlang}>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
