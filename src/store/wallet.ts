import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

export enum TabStateType {
  WITHDRAW = 'withdraw',
  HISTORY = 'history',
}

interface State {
  tabState: TabStateType;
}

interface Action {
  setTabState: (v: TabStateType) => void;
}

const useWalletStore = create(
  immer<State & Action>((set, get) => ({
    // Default State
    tabState: TabStateType.WITHDRAW,

    // Actions
    setTabState: (tabState) => {
      set({ tabState });
    }
  }))
);

export default useWalletStore;
