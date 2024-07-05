import React from 'react';
import { lulo } from "@fonts";

export const metadata: Metadata = {
  title: "Retool 導入支援に特化した開発会社 GOOD NEIGHBOR WORKS",
  description: "Retool を活用してお客様のニーズに合わせた業務システムを開発します。",
};

export default function Retool() {
  return (
    <main className="mt-32">
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="mx-auto max-w-lg text-center">
            <p className={`${lulo.className} text-xl sm:text-xl md:text-xl pt-4`}>ローコードプラットフォーム</p>
            <h1 className={`${lulo.className} font-extrabold text-4xl pt-4`}>
              Retool開発
            </h1>

            <p className="mt-4 text-lg text-gray-500">
              Retool とはドラック＆ドロップで迅速にシステムを開発できるローコードツールです。
              少量のコードを書くことでデータベースやAPIと連携することができ、既存システムとの連携もスムーズに実現できます。
            </p>
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <h2 className="text-2xl font-extrabold text-center">Retool 開発のメリット</h2>
        </div>
      </section>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <h2 className="text-2xl font-extrabold text-center">Retool の導入事例</h2>
        </div>
      </section>
    </main>
  );
}
