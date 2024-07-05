import type { Metadata } from "next";
import "./globals.css";
import { notojp } from "./fonts";

import Header from "./header";
import Footer from "./footer";
import Transition from "./transition";

export const metadata: Metadata = {
  title: "Retool・Bubble を活用したノーコード開発 | GOOD NEIGHBOR WORKS",
  description: "当社は Retool・Bubble などのノーコード・ローコードツールを活用した開発を得意とする開発会社です。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </head>
      <body className={notojp.className}>
        <Header />
        <Transition>{children}</Transition>
        <Footer />
      </body>
    </html>
  );
}
