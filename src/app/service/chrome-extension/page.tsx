import type { Metadata } from "next";
import { lulo } from "@fonts";

import ContactBanner from "@components/ContactBanner";

export const metadata: Metadata = {
  title: "Chrome 拡張機能開発します | GOOD NEIGHBOR WORKS",
  description: "普段の業務の効率化や、外部サービスとの連携など柔軟にカスタムいたします！",
};

export default function ChromeExtension() {
  return (
    <main className="mt-32">
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="mx-auto max-w-lg text-center">
            <h1 className={`${lulo.className} font-extrabold text-4xl pt-4`}>
              Chrome 拡張機能
            </h1>

            <p className="mt-4 text-lg text-gray-500">
              Chrome 拡張機能とは、Google Chrome の機能を拡張するためのプラグインです。
              表示中のページの情報を取得したり、外部サービスと連携したり、普段の業務の効率化など、様々な用途で活用できます。
            </p>
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <h2 className="text-2xl font-extrabold text-center">Chrome拡張機能でできること</h2>
        </div>
      </section>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <h2 className="text-2xl font-extrabold text-center">Chrome拡張機能の導入事例</h2>
        </div>
      </section>
      <ContactBanner
        title="Chrome拡張機能の導入をお考えの方はお気軽にご相談ください。"
        subtitle="Chrome拡張機能ででできること、費用感、既存システムの連携方法などお客様の状況に合わせてご提案させていただきます。"
      />
    </main>
  );
}
