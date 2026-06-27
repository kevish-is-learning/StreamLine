'use client';

import {Check} from 'lucide-react';
import {useSetupStore} from '@/store/setupStore';

const features=['Next.js App Router','TypeScript','Tailwind CSS v4','TanStack Query','Zustand state store','ESLint+Prettier','Husky+lint-staged',];

export function SetupShowcase(){
  const{visits,incrementVisits}=useSetupStore();

  return (
    <div className="grid gap-8 sm:grid-cols-[1fr_240px]">
      <div className="space-y-6">
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-slate-500">Project setup</p>
          <h2 className="mt-3 text-2xl font-semibold text-slate-900">Everything is wired</h2>
          <p className="mt-2 text-sm leading-6 text-slate-600">The frontend repository is ready for development with modern toolingand a reusable architecture.</p>
        </div>

        <ul className="grid gap-3">
          {features.map((feature) => (
            <li key={feature} className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-sky-500 text-white"><Check size={16} /></span>
              <span className="text-sm font-medium text-slate-900">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="space-y-6 rounded-3xl border border-slate-200 bg-slate-950 p-6 text-white shadow-lg">
        <div>
          <p className="text-sm uppercase tracking-[0.24em] text-sky-300">Live sample</p>
          <h3 className="mt-3 text-2xl font-semibold">Visit counter</h3>
        </div>

        <div className="rounded-3xl bg-slate-900 p-6 text-center shadow-inner shadow-slate-950/30">
          <p className="text-4xl font-semibold">{visits}</p>
          <p className="mt-2 text-sm text-slate-400">Page loads tracked in Zustand store</p>
          <button type="button" onClick={incrementVisits} className="mt-6 inline-flex items-center justify-center rounded-2xl bg-sky-500 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-400">Increment visits</button>
        </div>
      </div>
    </div>
  );
}
