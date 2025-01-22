import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

export enum TabStateType {
  SHELL = 'shell',
  PEARL = 'pearl',
}

interface State {
  tabState: TabStateType;
}

interface Action {
  setTabState: (v: TabStateType) => void;
}

const useRaffleStore = create(
  immer<State & Action>((set, get) => ({
    // Default State
    tabState: TabStateType.SHELL,

    // Actions
    setTabState: (tabState) => {
      set({ tabState });
    }
  }))
);

export default useRaffleStore;
