// https://nextjs.org/docs/app/building-your-application/optimizing/fonts#using-multiple-fonts

import {
  Noto_Sans_JP, // default
  Montserrat, // 英語アイキャッチ
  Zen_Kaku_Gothic_Antique, // 日本語アイキャッチ
  Roboto_Mono,
} from "next/font/google";

import localFont from 'next/font/local'

export const notojp = Noto_Sans_JP({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const roboto = Roboto_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const zenkaku = Zen_Kaku_Gothic_Antique({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const lulo = localFont({
  src: "./LuloCleanFont.woff",
  variable: "--kicho-jis",
 });
