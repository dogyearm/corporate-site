import React from 'react';
import Image from 'next/image';
import { lulo } from '@fonts';

export default function About() {
  return (
    <main className="mt-32">
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="mx-auto max-w-lg text-center">
            <p className={`${lulo.className} font-extrabold text-xl sm:text-xl md:text-xl pt-4`}>会社概要</p>
            <h1 className={`${lulo.className} font-extrabold text-4xl sm:text-6xl md:text-6xl pt-4`}>
              About
            </h1>
          </div>
        </div>
      </section>

      { /*
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="mx-auto max-w-lg text-center">
            <h2 className={`${lulo.className} font-extrabold text-xl sm:text-2xl md:text-2xl pt-4`}>Mission</h2>
          </div>
        </div>
      </section>
      */ }

      <section id="about" className="bg-gray-300">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
              <Image
                src="/about_thumb.jpeg"
                width={800}
                height={600}
                alt="About"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            <div className="lg:py-24">
              <h2 className={`${lulo.className} text-3xl font-bold sm:text-4xl`}>Company Profile</h2>

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

                  { /*
                  <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                    <dt className="font-medium text-gray-900">所在地</dt>
                    <dd className="text-gray-700 sm:col-span-2">神奈川県横浜市</dd>
                  </div>
                  */ }

                  <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                    <dt className="font-medium text-gray-900">設立</dt>
                    <dd className="text-gray-700 sm:col-span-2">2024年登記準備中</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>

      { /*
      <section className="flex flex-col items-center mt-16">
        <h2 className="text-2xl font-bold text-center">Members</h2>
      </section>
      */ }
    </main>
  );
}
