'use client'

import { create } from 'zustand'
import { MediaItem } from '@/types/media'

interface StoreState {
  selected: MediaItem[];
  setSelected: (selected: MediaItem[]) => void;
}

const useStore = create<StoreState>((set) => ({
  selected: [],
  setSelected: (selected) => set({ selected }),
}))

export default useStore
