import React from 'react';
import { lulo } from '@fonts';

export default function Contact() {
  return (
    <main className="mt-32">
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="mx-auto max-w-lg flex flex-col items-center">
            <h1 className={`${lulo.className} font-extrabold text-4xl sm:text-6xl md:text-6xl pt-4 mb-10`}>
              Contact
            </h1>
            <iframe
               src="https://docs.google.com/forms/d/e/1FAIpQLSf8qBa0Ogg0oQMF5q-WJM6CWaqgAc7xFK8Kle0AlrNat7WJXQ/viewform?embedded=true"
               width="640"
               height="1368"
               frameBorder="0"
             >
              読み込んでいます…
            </iframe>
          </div>
        </div>
      </section>
    </main>
  );
}
