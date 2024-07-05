import Image from "next/image";

import { montserrat, lulo } from './fonts';

// カバー画像を gif で表示したい
export default function Home() {
  return (
    <main className="mt-32">
      <section className="relative bg-[url(/hero.gif)] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-gray-900/75 sm:bg-transparent sm:from-gray-900/95 sm:to-gray-900/25"></div>
        <div className="relative mx-auto max-w-screen-xl px-4 py-36 sm:px-6 lg:flex lg:items-center lg:px-8" >
          <div className="mx-auto max-w-xl text-center">
            <h1 className={`${lulo.className} text-white font-extrabold text-4xl sm:text-6xl md:text-7xl pt-4`}>
            { /* <h1 className={`${montserrat.className} text-white font-extrabold text-4xl sm:text-6xl md:text-8xl pt-4`}> */ }
              GOOD NEIGHBOR WORKS
            </h1>

            <p className="mt-4 max-w-lg text-white sm:text-xl/relaxed">
              当社は <strong>Retool</strong>・<strong>Bubble</strong> などのノーコード・ローコードツールを活用した開発を得意とする開発会社です。
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a href="/contact" className="block w-full rounded bg-gray-700 px-12 py-3 text-sm font-medium text-white shadow hover:bg-slate-700 focus:outline-none focus:ring active:bg-slate-500 sm:w-auto">
                お問い合わせはこちら →
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="service" className="bg-white">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="mx-auto max-w-lg text-center">
            <p className="mb-4">提供するサービス</p>
            <h2 className={`${lulo.className} text-3xl font-bold sm:text-4xl`}>Services</h2>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <a
              className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-slate-500/10 hover:shadow-slate-500/10"
              href="#"
            >

              <svg class="size-10 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="square" stroke-width="2" d="M8 15h7.01v.01H15L8 15Z"/>
                <path stroke="currentColor" stroke-linecap="square" stroke-width="2" d="M20 6H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1Z"/>
                <path stroke="currentColor" stroke-linecap="square" stroke-width="2" d="M6 9h.01v.01H6V9Zm0 3h.01v.01H6V12Zm0 3h.01v.01H6V15Zm3-6h.01v.01H9V9Zm0 3h.01v.01H9V12Zm3-3h.01v.01H12V9Zm0 3h.01v.01H12V12Zm3 0h.01v.01H15V12Zm3 0h.01v.01H18V12Zm0 3h.01v.01H18V15Zm-3-6h.01v.01H15V9Zm3 0h.01v.01H18V9Z"/>
              </svg>

              <h2 className="mt-4 text-xl font-bold">フルスクラッチ開発</h2>

              <p className="mt-1 text-sm text-gray-900">
                ホームページからWEBサービスまイチから開発いたします。
              </p>
            </a>

            <a
              className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-slate-500/10 hover:shadow-slate-500/10"
              href="#"
            >
              <svg className="size-10 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v5m-3 0h6M4 11h16M5 15h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1Z"/>
              </svg>

              <h2 className="mt-4 text-xl font-bold">ノーコード開発</h2>

              <p className="mt-1 text-sm text-gray-900">
                Retool/Bubble/Google App Shee などのノーコード・ローコードツールを活用した開発を行います。
                ウェブサイトから社内向け業務システムまで幅広く対応いたします。
              </p>
            </a>

            <a
              className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-slate-500/10 hover:shadow-slate-500/10"
              href="#"
            >
              <svg className="size-10 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17h6l3 3v-3h2V9h-2M4 4h11v8H9l-3 3v-3H4V4Z"/>
              </svg>

              <h2 className="mt-4 text-xl font-bold">LIFF 連携アプリ</h2>

              <p className="mt-1 text-sm text-gray-900">
                LINE アプリと連携したアプリケーションの開発を行います。
                店舗向けのアプリからユーザー向けのアプリまで幅広く対応いたします。
              </p>
            </a>

            <a
              className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-slate-500/10 hover:shadow-slate-500/10"
              href="#"
            >

              <svg className="size-10 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 8h.01M9 8h.01M12 8h.01M4 11h16M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"/>
              </svg>

              <h2 className="mt-4 text-xl font-bold">Chrome 拡張ツール開発</h2>

              <p className="mt-1 text-sm text-gray-900">
                Chrome 拡張機能の開発を行います。
                業務効率化ツールから既存サービスと連携したツールまで幅広く対応いたします。
              </p>
            </a>

            <a
              className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-slate-500/10 hover:shadow-slate-500/10"
              href="#"
            >

              <svg class="size-10 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"/>
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 13c0 2.038-2.239 4.5-5 4.5S7 15.038 7 13c0 1.444 10 1.444 10 0Z"/>
                <path fill="currentColor" d="m9 6.811.618 1.253 1.382.2-1 .975.236 1.377L9 9.966l-1.236.65L8 9.239l-1-.975 1.382-.2L9 6.811Zm6 0 .618 1.253 1.382.2-1 .975.236 1.377L15 9.966l-1.236.65L14 9.239l-1-.975 1.382-.2L15 6.811Z"/>
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m9 6.811.618 1.253 1.382.2-1 .975.236 1.377L9 9.966l-1.236.65L8 9.239l-1-.975 1.382-.2L9 6.811Zm6 0 .618 1.253 1.382.2-1 .975.236 1.377L15 9.966l-1.236.65L14 9.239l-1-.975 1.382-.2L15 6.811Z"/>
              </svg>

              <h2 className="mt-4 text-xl font-bold">Rails バージョンアップ</h2>

              <p className="mt-1 text-sm text-gray-900">
                Rails のバージョンアップを行います。
                パッチバージョンからメジャーバージョンまで後方互換性を保ちながら安全に移行いたします。
              </p>
            </a>

            <a
              className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-slate-500/10 hover:shadow-slate-500/10"
              href="#"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-10 text-gray-800"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path
                  d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                />
              </svg>

              <h2 className="mt-4 text-xl font-bold">コンサルティング業務</h2>

              <p className="mt-1 text-sm">
                WEBサービスの企画から開発まで幅広くサポートいたします。
              </p>
            </a>

          </div>
        </div>
      </section>

      <section id="works" className="bg-gray-200">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="mx-auto max-w-lg text-center">
            <p className="mb-4">開発事例</p>
            <h2 className={`${lulo.className} text-3xl font-bold sm:text-4xl`}>Works</h2>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <a href="#" class="group relative block h-64 sm:h-80 lg:h-96">
              <span class="absolute inset-0 border-2 border-dashed border-black"></span>

              <div
                class="relative flex h-full transform items-end border-2 border-black bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2"
              >
                <div
                  class="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8"
                >
                  <svg class="size-10 sm:size-12" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7.171 12.906-2.153 6.411 2.672-.89 1.568 2.34 1.825-5.183m5.73-2.678 2.154 6.411-2.673-.89-1.568 2.34-1.825-5.183M9.165 4.3c.58.068 1.153-.17 1.515-.628a1.681 1.681 0 0 1 2.64 0 1.68 1.68 0 0 0 1.515.628 1.681 1.681 0 0 1 1.866 1.866c-.068.58.17 1.154.628 1.516a1.681 1.681 0 0 1 0 2.639 1.682 1.682 0 0 0-.628 1.515 1.681 1.681 0 0 1-1.866 1.866 1.681 1.681 0 0 0-1.516.628 1.681 1.681 0 0 1-2.639 0 1.681 1.681 0 0 0-1.515-.628 1.681 1.681 0 0 1-1.867-1.866 1.681 1.681 0 0 0-.627-1.515 1.681 1.681 0 0 1 0-2.64c.458-.361.696-.935.627-1.515A1.681 1.681 0 0 1 9.165 4.3ZM14 9a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"/>
                  </svg>

                  <h2 class="mt-4 text-xl font-medium sm:text-2xl">投げ銭サービスへの Chrome 拡張機能の導入</h2>
                </div>

                <div
                  class="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8"
                >
                  <h3 class="mt-4 text-xl font-medium sm:text-2xl">Go around the world</h3>

                  <p class="mt-4 text-sm sm:text-base">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, praesentium voluptatem
                    omnis atque culpa repellendus.
                  </p>

                  <p class="mt-8 font-bold">Read more</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="bg-gray-300">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            <div className="lg:py-24">
              <p className="mb-4">会社概要</p>
              <h2 className={`${lulo.className} text-3xl font-bold sm:text-4xl`}>About</h2>

              <div className="flow-root mt-8">
                <dl className="-my-3 divide-y divide-gray-100 text-sm">
                  <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                    <dt className="font-medium text-gray-900">会社名</dt>
                    <dd className="text-gray-700 sm:col-span-2">株式会社 GOOD NEIGHBOR WORKS</dd>
                  </div>

                  <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                    <dt className="font-medium text-gray-900">代表者</dt>
                    <dd className="text-gray-700 sm:col-span-2">岩元 雄太郎</dd>
                  </div>

                  <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                    <dt className="font-medium text-gray-900">所在地</dt>
                    <dd className="text-gray-700 sm:col-span-2">神奈川県横浜市</dd>
                  </div>

                  <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                    <dt className="font-medium text-gray-900">設立</dt>
                    <dd className="text-gray-700 sm:col-span-2">登記準備中</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
