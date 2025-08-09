import { create } from "zustand";
import {
  StoreState,
  Selections,
  SelectionTypes,
  FormAddedStore,
} from "../types";

const useFormAdded = create<FormAddedStore>((set) => ({
  formAdded: [],
  addDefaultForm: (type: SelectionTypes) => {
    set({
      formAdded: [
        ...useFormAdded.getState().formAdded,
        {
          ...defaultFormTypes(type),
          type,
        },
      ],
    });

    console.log("Default form added", useFormAdded.getState().formAdded);
  },

  setFormAdded: (item: Selections) =>
    set((state) => ({
      formAdded: [...state.formAdded, item],
    })),
}));

export default useFormAdded;

const defaultFormTypes = (type: SelectionTypes): Selections => {
  switch (type) {
    case "Paragraph":
      return {
        title: "Untitled Heading",
        options: [],
        paragraph: "Please enter your text here.",
        type: "Paragraph",
      };
    case "Multiple Choice":
      return {
        title: "Untitled Heading",
        options: ["Check me", "Or me"],
        paragraph: "Please check the boxes you agree with.",
        type: "Multiple Choice",
      };
    case "Checkbox":
      return {
        title: "Untitled Heading",
        options: [],
        paragraph: "Please enter your text here.",
        type: "Checkbox",
      };
    case "Dropdown":
      return {
        title: "Untitled Heading",
        options: ["Option A", "Option B", "Option C"],
        paragraph: "Please select an option.",
        type: "Dropdown",
      };
    case "Rating":
      return {
        title: "Untitled Heading",
        options: ["Option A", "Option B", "Option C"],
        paragraph: "Please select an option.",
        type: "Rating",
      };
    default:
      return {
        title: "Untitled Heading",
        options: [],
        paragraph: "eww",
        type: "Short Answer",
      };
  }
};
