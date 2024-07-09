export default function BlogPost({ params }: {
  params: { postId: string }
}) {
  return (
    <main>
      <section className="mt-32">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="mx-auto max-w-lg text-center">
            <h1 className="font-extrabold text-4xl pt-4">
              {params.postId}
            </h1>
          </div>
        </div>
      </section>
    </main>
  );
}
