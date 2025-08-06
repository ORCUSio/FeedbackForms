import { create } from "zustand";
import { SelectionTypes, StoreState } from "../types";

const useSelectedTypeStore = create<StoreState>((set) => ({
  selected: "Dropdown",
  setSelected: (item: SelectionTypes) => set({ selected: item }),
}));

export default useSelectedTypeStore;
