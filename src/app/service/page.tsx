import Image from "next/image";

export default function Service() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold text-center">Service</h1>
      <p className="text-gray-500 text-center">
        ニーズに合ったシステム導入をサポートします。
      </p>
      <section className="flex flex-col gap-8 mt-16">
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-xl font-bold">Web Development</h2>
          <p className="text-gray-500 text-center">
            フロントエンドからバックエンドまで、Webアプリケーションの開発を行います。
          </p>
        </div>
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-xl font-bold">Mobile Development</h2>
          <p className="text-gray-500 text-center">
            ノーコード開発プラットフォームを使用してシステム構築を行います。
          </p>
        </div>
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-xl font-bold">UI/UX Design</h2>
          <p className="text-gray-500 text-center">
            アーキテクチャー設計からデザインまで、ユーザビリティを重視したシステムを提供します。
          </p>
        </div>
      </section>
    </main>
  );
}
