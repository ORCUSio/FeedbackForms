export interface Selections {
  title: string;
  options?: string[];
  paragraph?: string;
  type?: SelectionTypes;
}
export interface FormAddedStore {
  formAdded: Selections[];
  setFormAdded: (item: Selections) => void;
  addDefaultForm: (type: SelectionTypes) => void;
}

export type SelectionTypes =
  | "Short Answer"
  | "Paragraph"
  | "Multiple Choice"
  | "Checkbox"
  | "Dropdown"
  | "Rating";
export const selectionValues: SelectionTypes[] = [
  "Short Answer",
  "Paragraph",
  "Multiple Choice",
  "Checkbox",
  "Dropdown",
  "Rating",
];
export interface StoreState {
  selected: SelectionTypes;
  setSelected: (item: SelectionTypes) => void;
}
