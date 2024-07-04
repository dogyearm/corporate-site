import Image from "next/image";

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold text-center">About</h1>
      <p className="text-lg text-center text-gray-500 mt-4">
        Good Neighbor Works は、横浜にオフィスを構えるノーコード・ローコード開発を専門とする会社です。
      </p>

      <section className="flex flex-col items-center mt-16">
        <h2 className="text-2xl font-bold text-center">Mission</h2>
      </section>

      <section className="flex flex-col items-center mt-16">
        <h2 className="text-2xl font-bold text-center">Company Profile</h2>
      </section>

      <section className="flex flex-col items-center mt-16">
        <h2 className="text-2xl font-bold text-center">Members</h2>
      </section>

      <section className="flex flex-col items-center mt-16">
        <h2 className="text-2xl font-bold text-center">Contact us</h2>
        <p className="text-lg text-center text-gray-500 mt-4">
          お気軽にお問い合わせください。
        </p>
      </section>
    </main>
  );
}
