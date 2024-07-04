import React from 'react';
import Link from 'next/link';

export default function Bannar() {
  return (
    <div class="relative flex flex-wrap bg-black px-4 py-1 sm:flex-nowrap sm:items-center sm:justify-center sm:gap-3 sm:pr-8 md:px-8">
      <div class="order-1 mb-2 inline-block w-11/12 max-w-screen-sm text-sm text-white sm:order-none sm:mb-0 sm:w-auto md:text-base">
        Youtube チャネルにて開発事例公開中！
      </div>

      <a href="#" class="order-last inline-block w-full whitespace-nowrap rounded-lg bg-black px-4 py-2 text-center text-xs font-semibold text-white outline-none ring-slate-300 transition duration-100 hover:bg-slate-700 focus-visible:ring active:bg-slate-800 sm:order-none sm:w-auto md:text-sm">アクセスはこちら</a>
    </div>
  );
}
