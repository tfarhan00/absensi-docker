import { create } from "zustand";

export const useSidebarStore = create((set) => ({
  isShow: false,
  toggleSidebar: () => set((state) => ({ isShow: !state.isShow })),
  setTrue: () => set((_) => ({ isShow: true })),
  setFalse: () => set((_) => ({ isShow: false })),
}));
