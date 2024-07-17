"use client";

import React from 'react';
import Image from "next/image";
import Banner from "@components/Banner";

import { usePathname } from 'next/navigation';
import { lulo } from '@fonts';

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav className="bg-white border-gray-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="/" className="flex gap-1 items-center">
            <Image src="/logo.svg" width={40} height={40} alt="Neighbor Works" className="mb-2.5" />
            <span className={`${lulo.className} self-center hidden sm:block text-sm font-semibold whitespace-nowrap`}>Good Neighbor Works</span>
          </a>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-semibold text-sm flex flex-col items-center p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white">
              <li>
                <a href="/#service" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-slate-700 md:px-2">
                  <span className="block text-xs">Service</span>
                  提供するサービス
                </a>
              </li>
              { /*
              <li>
                <a href="/#works" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-slate-700 md:px-2">
                  <span className="block text-xs">Works</span>
                  開発実績
                </a>
              </li>
              */ }
              <li>
                <a href="/#about" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-slate-700 md:px-2">
                  <span className="block text-xs">About us</span>
                  会社概要
                </a>
              </li>
              <li>
                <a href="/blog" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-slate-700 md:px-2">
                  <span className="block text-xs">Blog</span>
                  <span className={`${pathname === '/blog' ? 'underline' : ''}`}>ブログ</span>
                </a>
              </li>
              <li>
                <a href="/contact" className="block rounded-lg bg-slate-500 px-6 py-3 text-center text-sm font-semibold text-white outline-none ring-slate-300 transition duration-100 hover:bg-slate-600 focus-visible:ring active:bg-slate-700">
                  お問い合わせ
                </a>
              </li>
            </ul>
          </div>

          <button
            className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
          >
            <span className="sr-only">Toggle menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      <Banner />
    </header>
  );
}
