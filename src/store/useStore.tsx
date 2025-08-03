import { create } from "zustand";

type Selections = "Dropdown" | "Button" | "Input" | "Text" | "Image";
interface StoreState {
  selected: string | null;
  setSelected: (item: string) => void;
}

const useStore = create<StoreState>((set) => ({
  selected: null,
  setSelected: (item: string) => set({ selected: item }),
}));

export default useStore;
