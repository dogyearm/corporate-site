import Image from "next/image";

export default function Works() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold text-center">Works</h1>
      <section className="flex flex-col gap-8 grid grid-cols-3 gap-4">
        <article className="group">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1631451095765-2c91616fc9e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
          />

          <div className="p-4">
            <a href="#">
              <h3 className="text-lg font-medium text-gray-900">コーポレートサイト制作事例</h3>
              <h4 className="text-sm font-light text-gray-500">株式会社サンプル</h4>
            </a>
          </div>
        </article>
      </section>
    </main>
  );
}
