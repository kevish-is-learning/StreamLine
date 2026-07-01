import { Show, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs';

export default function Home() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,#1f2937_0%,#09090b_44%,#030712_100%)] px-6 py-5 text-white sm:px-10 lg:px-16">
      <header className="mx-auto flex w-full max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-xl sm:px-6">
        <div className="text-sm font-semibold uppercase tracking-[0.28em] text-zinc-100">streamline</div>

        <nav className="flex items-center gap-3">
          <Show when="signed-out">
            <SignInButton mode="modal"><button className="inline-flex h-10 items-center justify-center rounded-full border border-white/15 bg-white/5 px-4 text-sm font-medium text-white transition hover:bg-white/10">Sign in</button></SignInButton>
            <SignUpButton mode="modal"><button className="inline-flex h-10 items-center justify-center rounded-full bg-white px-4 text-sm font-semibold text-zinc-950 transition hover:bg-zinc-200">Create account</button></SignUpButton>
          </Show>

          <Show when="signed-in"><UserButton /></Show>
        </nav>
      </header>

      <section className="mx-auto flex min-h-[calc(100vh-5.5rem)] w-full max-w-7xl items-center justify-center px-4">
        <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">streamline</h1>
      </section>
    </main>
  );
}
