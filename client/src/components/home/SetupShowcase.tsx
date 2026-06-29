'use client';

import { useSetupStore } from '@/store/setupStore';

export function SetupShowcase() {
  const { visits, incrementVisits } = useSetupStore();

  return (
    <div className="rounded-lg border border-zinc-800 bg-zinc-900 p-6 text-left">
      <h2 className="text-xl font-semibold">Starter Zustand setup</h2>
      <p className="mt-2 text-sm text-zinc-400">
        This is a simple example of a Zustand store in the app.
      </p>
      <button
        onClick={incrementVisits}
        className="mt-4 rounded-md bg-white px-4 py-2 text-sm font-medium text-zinc-950"
      >
        Visits: {visits}
      </button>
    </div>
  );
}
