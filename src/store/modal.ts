import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { Question_ListItemType } from "@/components";

interface State {
  /** Modals */
  freeBoxModal: boolean;
  upgradeModal: boolean;
  boostModal: boolean;
  loadingModal: boolean;

  /** Sheets */
  questBottomSheet: Question_ListItemType | null;
  profileBottomSheet: boolean;
  addressEditBottomSheet: boolean;
}

interface Action {
  /** Modals */
  setFreeBoxModal: (v: boolean) => void;
  setUpgradeModal: (v: boolean) => void;
  setBoostModal: (v: boolean) => void;
  setLoadingModal: (v: boolean) => void;

  /** Sheets */
  setQuestBottomSheet: (v: Question_ListItemType | null) => void;
  setProfileBottomSheet: (v: boolean) => void;
  setAddressEditBottomSheet: (v: boolean) => void;
}

const useModalStore = create(
  immer<State & Action>((set, get) => ({
    /** Default State - Modals */
    freeBoxModal: false,
    upgradeModal: false,
    boostModal: false,
    loadingModal: false,

    /** Default State - Sheets */
    questBottomSheet: null,
    profileBottomSheet: false,
    addressEditBottomSheet: false,

    /** Actions - Modals */
    setFreeBoxModal: (freeBoxModal) => {
      set({ freeBoxModal })
    },
    setUpgradeModal: (upgradeModal) => {
      set({ upgradeModal })
    },
    setBoostModal: (boostModal) => {
      set({ boostModal })
    },
    setLoadingModal: (loadingModal) => {
      set({ loadingModal })
    },

    /** Actions - Sheets */
    setQuestBottomSheet: (questBottomSheet) => {
      set({ questBottomSheet });
    },
    setProfileBottomSheet: (profileBottomSheet) => {
      set({ profileBottomSheet });
    },
    setAddressEditBottomSheet: (addressEditBottomSheet) => {
      set({ addressEditBottomSheet });
    }
  }))
);

export default useModalStore;
