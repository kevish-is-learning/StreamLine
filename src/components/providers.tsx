'use client';

import type { ReactNode } from 'react';
import { Providers as QueryProviders } from './providers/Providers';

export function Providers({ children }: { children: ReactNode }) {
  return <QueryProviders>{children}</QueryProviders>;
}
