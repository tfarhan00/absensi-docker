import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { mainSlice } from "@/stores/MainStore";

const allSlices = (...all) => ({
  ...mainSlice(...all),
});

const useStore = create(
  immer((...all) => ({
    ...allSlices(...all),
  }))
);

export { useStore };
