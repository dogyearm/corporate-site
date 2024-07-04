import Image from "next/image";
import Banner from "./banner";

import { montserrat } from './fonts';

// カバー画像を gif で表示したい
export default function Home() {
  return (
    <main>
      <section className="relative bg-[url(/hero.gif)] bg-cover bg-center bg-no-repeat" >

        <div className="absolute inset-0 bg-gray-900/75 sm:bg-transparent sm:from-gray-900/95 sm:to-gray-900/25"></div>

        <div className="relative mx-auto max-w-screen-xl px-4 py-36 sm:px-6 lg:flex lg:items-center lg:px-8" >
          <div className="mx-auto max-w-xl text-center">
            <h1 className={`${montserrat.className} text-white font-extrabold text-4xl sm:text-6xl md:text-8xl pt-4`}>
              GOOD NEIGHBOR
            </h1>

            <p className="mt-4 max-w-lg text-white sm:text-xl/relaxed">
              株式会社グッドネイバーはノーコード・ノーコード開発を専門とした開発パートナー企業です。
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a href="#" className="block w-full rounded bg-black px-12 py-3 text-sm font-medium text-white shadow hover:bg-slate-700 focus:outline-none focus:ring active:bg-slate-500 sm:w-auto">
                お問い合わせはこちら →
              </a>
            </div>
          </div>
        </div>
      </section>
      <Banner />
      <section className="bg-white">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center sm:text-4xl">About</h2>
      </section>
      <section className="bg-gray-100">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center sm:text-4xl">Services</h2>
      </section>
      <section className="bg-white">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center sm:text-4xl">Works</h2>
      </section>
      <section className="bg-gray-100">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center sm:text-4xl">Contact Us</h2>
      </section>
    </main>
  );
}
