import React from 'react';
import Link from 'next/link';

export default function ContactButton() {
  return (
    <a
      href="/contact"
      className="inline-block rounded-full bg-gray-500 px-24 py-4 text-xl font-bold text-white transition hover:bg-gray-700 focus:outline-none focus:ring focus:ring-yellow-400"
    >
      お問合せはこちら →
    </a>
  );
}
