import { create } from "zustand";
import { SelectionTypes, selectionValues, StoreState } from "../types";

const useSelectedTypeStore = create<StoreState>((set) => ({
  selected: selectionValues[0],
  setSelected: (item: SelectionTypes) => set({ selected: item }),
}));

export default useSelectedTypeStore;
