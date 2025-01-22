import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { Loader } from "@/components";

interface State {
  loadingState: boolean;
}

interface Action {
  setLoadingState: (v: boolean) => void;
}

const useUtilsStore = create(
  immer<State & Action>((set, get) => ({
    // Default State
    loadingState: false,

    // Actions
    setLoadingState: (loadingState) => {
      set({ loadingState });
      Loader(loadingState);
    }
  }))
);

export default useUtilsStore;
