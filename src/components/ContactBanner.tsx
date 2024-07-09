import React from 'react';

export default function ContactBanner({
  title = "まずはお気軽にご相談ください。",
  subtitle = "お手伝いできること、開発の費用感、お使いのシステムの改善方法などお客様の状況に合わせてご提案させていただきます。",
  buttonText = "お仕事のご相談はこちら →",
}) {

  return (
    <section className="text-white relative bg-[url(/hero.gif)] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
      <div className="relative mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-3xl font-bold">{title}</h2>
          <p className="mt-4 text-white">{subtitle}</p>
        </div>
        <div className="mt-12 text-center">
          <a
            href="/contact"
            className="inline-block rounded-full bg-gray-500 px-24 py-4 text-xl font-bold text-white transition hover:bg-gray-700 focus:outline-none focus:ring focus:ring-yellow-400"
          >
            {buttonText}
          </a>
        </div>
      </div>
    </section>
  );
}
