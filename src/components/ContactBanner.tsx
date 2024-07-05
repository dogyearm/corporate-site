import React from 'react';
import Link from 'next/link';
import ContactButton from '@components/ContactButton';

export default function ContactBannar() {
  return (
    <section className="text-white relative bg-[url(/hero.gif)] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
      <div className="relative mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-3xl font-bold">Retool の導入をお考えの場合は<br />お気軽にご相談ください。</h2>

          <p className="mt-4 text-white">
            Retool でできること、費用感、既存システムの連携方法などお客様の状況に合わせてご提案させていただきます。
          </p>
        </div>

        <div className="mt-12 text-center">
          <ContactButton />
        </div>
      </div>
    </section>
  );
}
