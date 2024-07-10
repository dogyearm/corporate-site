import type { Metadata } from "next";
import "./globals.css";
import { notojp } from "@fonts";

import Header from "@components/Header";
import Footer from "@components/Footer";

export const metadata: Metadata = {
  title: "GOOD NEIGHBOR WORKS",
  description: "「Good Neighbor = 良き隣人」であることを大切にし<br />お客様のビジネスをサポートします。",
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
        {children}
        <Footer />
      </body>
    </html>
  );
}
