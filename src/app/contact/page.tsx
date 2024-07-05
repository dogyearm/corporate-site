import React from 'react';
import { lulo } from './../fonts';

export default function Contact() {
  return (
    <main className="mt-32">
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="mx-auto max-w-lg flex flex-col items-center">
            <h1 className={`${lulo.className} font-extrabold text-4xl sm:text-6xl md:text-6xl pt-4`}>
              Contact
            </h1>

            <iframe
               src="https://docs.google.com/forms/d/e/1FAIpQLSfDGO4oA3peo7wkKomxOtZ9RLM-NBvw9Jp67BapP_oGdFqL7g/viewform?embedded=true"
               width="640"
               height="1146"
               frameBorder="0"
               marginHeight="0"
               marginWidth="0"
             >
              読み込んでいます…
            </iframe>
          </div>
        </div>
      </section>
    </main>
  );
}
