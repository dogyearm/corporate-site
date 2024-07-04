import React from 'react';
import Link from 'next/link';
import Image from "next/image";
import { lulo } from './fonts';

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="pb-16 pt-4 sm:pt-10 lg:pt-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="grid grid-cols-2 gap-12 border-t pt-10 md:grid-cols-4 lg:grid-cols-6 lg:gap-8 lg:pt-12">
            <div className="col-span-full lg:col-span-2">
              <div className="mb-1 lg:-mt-2">
                <a href="/" className="inline-flex items-center gap-1 text-sm font-bold text-black" aria-label="logo">
                  <Image src="/logo.svg" width={40} height={40} alt="Neighbor Works" className="mb-2.5" />
                  <span className={lulo.className}>Good Neighbor Works</span>
                </a>
              </div>
            </div>

            <div>
              <div className="mb-4 font-bold text-sm uppercase tracking-widest text-gray-800">Products</div>

              <nav className="flex flex-col gap-4">
                <div>
                  <a href="#" className="text-sm text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Works</a>
                </div>

                <div>
                  <a href="/" className="text-sm text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Service</a>
                </div>
              </nav>
            </div>

            <div>
              <div className="mb-4 font-bold text-sm uppercase tracking-widest text-gray-800">Company</div>

              <nav className="flex flex-col gap-4">
                <div>
                  <a href="/about" className="text-sm text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">About</a>
                </div>

                <div>
                  <a href="/blog" className="text-sm text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Blog</a>
                </div>
              </nav>
            </div>

            <div>
              <div className="mb-4 font-bold text-sm uppercase tracking-widest text-gray-800">Support</div>

              <nav className="flex flex-col gap-4">
                <div>
                  <a href="/contact" className="text-sm text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Contact</a>
                </div>
              </nav>
            </div>
            <div>
              <div className="mb-4 font-bold text-sm uppercase tracking-widest text-gray-800">Legal</div>

              <nav className="flex flex-col gap-4">
                <div>
                  <a href="#" className="text-sm text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Privacy Policy</a>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-100">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="flex items-center justify-between gap-4 py-8">
            <span className="text-sm text-gray-400"> © 2024 - Present Good Neighbor.inc All rights reserved. </span>

            <div className="flex gap-4">
              <a href="#" target="_blank" className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
                <svg className="h-5 w-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
