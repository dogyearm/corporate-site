export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="mt-32 bg-white">
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-2xl">
            {children}
          </div>
        </div>
      </section>
    </main>
  );
}
