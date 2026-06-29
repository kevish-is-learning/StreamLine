import { create } from 'zustand';

interface SetupStore {
  visits: number;
  incrementVisits: () => void;
}

export const useSetupStore = create<SetupStore>((set) => ({
  visits: 0,
  incrementVisits: () => set((state) => ({ visits: state.visits + 1 })),
}));
