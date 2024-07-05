import React from 'react';
import { lulo } from "@fonts";

export default function Retool() {
  return (
    <main className="mt-32">
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="mx-auto max-w-lg text-center">
            <p className={`${lulo.className} font-extrabold text-xl sm:text-xl md:text-xl pt-4`}>提供するサービス</p>
            <h1 className={`${lulo.className} font-extrabold text-4xl sm:text-6xl md:text-6xl pt-4`}>
              Service
            </h1>
          </div>
        </div>
      </section>
    </main>
  );
}
