import React from 'react';
import Link from 'next/link';

export default function Bannar() {
  return (
    <div className="bg-black px-4 py-3 text-white">
      <p className="text-center text-sm font-medium">
        Youtube チャネルにて開発事例公開中！
        <a href="https://www.youtube.com/@devlivejp" target="_blank" className="inline-block underline">Check out !!</a>
      </p>
    </div>
  );
}
