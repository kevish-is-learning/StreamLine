export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-zinc-950 p-24 text-white">
      <div className="space-y-4 text-center">
        <h1 className="text-4xl font-bold tracking-tight">
          StreamLine Frontend
        </h1>
        <p className="mx-auto max-w-lg text-zinc-400">
          Next.js 15, Tailwind CSS, shadcn/ui, TanStack Query, and Zustand are
          successfully initialized.
        </p>
        <div className="flex justify-center gap-4 pt-4">
          <span className="rounded-md border border-zinc-800 bg-zinc-900 px-3 py-1 text-sm font-medium">
            Setup Complete
          </span>
        </div>
      </div>
    </main>
  );
}
