import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./header";
import Footer from "./footer";

import { notojp } from "./fonts";

export const metadata: Metadata = {
  title: "ノーコード・ローコードの開発会社 GOOD NEIGHBOR",
  description: "株式会社 GOOD NEIGHBOR は横浜に拠点を置くノーコード・ローコードの開発会社です。お客様のビジネス課題を解決するために、最適なソリューションを提供します。",
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
        <meta name="description" content={metadata.description} />
        <title>{metadata.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={notojp.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
