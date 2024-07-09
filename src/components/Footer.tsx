import React from 'react';
import Link from 'next/link';
import Image from "next/image";
import { lulo } from "@fonts";

export default function Footer() {
  return (
    <footer className="bg-gray-100">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <a href="/" className="flex gap-1 items-center">
            <Image src="/logo.svg" width={40} height={40} alt="Neighbor Works" className="mb-2.5" />
            <span className={`${lulo.className} self-center text-sm font-semibold whitespace-nowrap`}>Good Neighbor Works</span>
          </a>
        </div>

        <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500 text-sm">
          「Good Neighbor = 良き隣人」であることを大切にし<br />お客様のビジネスをサポートします。
        </p>
        <p className="mx-auto mt-6 max-w-md text-center">
          <span className="text-xs tracking-wide text-gray-500">Mailto →</span>

          <a href="mailto:info@goodneighbor.works" target="_blank" className="ml-3 text-md font-bold text-gray-900 hover:opacity-75">
            info@goodneighbor.works
          </a>
        </p>


        <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
          <li>
            <a className="text-gray-700 transition hover:text-gray-700/75" href="/#service"> Service </a>
          </li>

          <li>
            <a className="text-gray-700 transition hover:text-gray-700/75" href="/#works"> Works </a>
          </li>

          <li>
            <a className="text-gray-700 transition hover:text-gray-700/75" href="/#about"> About </a>
          </li>

          <li>
            <a className="text-gray-700 transition hover:text-gray-700/75" href="/blog"> Blog </a>
          </li>

          <li>
            <a className="text-gray-700 transition hover:text-gray-700/75" href="/contact"> Contact </a>
          </li>
        </ul>

        <ul className="mt-12 flex justify-center gap-6 md:gap-8">
          <li>
            <a
              href="https://www.youtube.com/@devlivejp"
              rel="noreferrer"
              target="_blank"
              className="text-gray-700 transition hover:text-gray-700/75"
            >
              <span className="sr-only">Youtube</span>
              <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M21.7 8.037a4.26 4.26 0 0 0-.789-1.964 2.84 2.84 0 0 0-1.984-.839c-2.767-.2-6.926-.2-6.926-.2s-4.157 0-6.928.2a2.836 2.836 0 0 0-1.983.839 4.225 4.225 0 0 0-.79 1.965 30.146 30.146 0 0 0-.2 3.206v1.5a30.12 30.12 0 0 0 .2 3.206c.094.712.364 1.39.784 1.972.604.536 1.38.837 2.187.848 1.583.151 6.731.2 6.731.2s4.161 0 6.928-.2a2.844 2.844 0 0 0 1.985-.84 4.27 4.27 0 0 0 .787-1.965 30.12 30.12 0 0 0 .2-3.206v-1.516a30.672 30.672 0 0 0-.202-3.206Zm-11.692 6.554v-5.62l5.4 2.819-5.4 2.801Z" clipRule="evenodd"/>
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
