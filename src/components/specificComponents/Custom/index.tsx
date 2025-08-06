import { selectionValues } from "@/src/types";
import { Dropdown, Button } from "../../shared";
import useFormAdded from "@/src/store/useFormAdded";
import useSelectedTypeStore from "@/src/store/useSelectedTypeStore";

export const HelpingText = () => (
  <div className="text-md text-gray-500 font-medium">
    <p>select a type and add an element</p>
    <p>
      it will add the element onto screen and changes will be saved on publish
    </p>
  </div>
);
export const ActionButton = () => {
  const { selected } = useSelectedTypeStore();
  const { addDefaultForm } = useFormAdded();
  return (
    <div className="flex justify-between">
      <Dropdown title="Add an element" items={selectionValues} />
      <Button>
        <div
          onClick={() => {
            console.log("Adding default form");
            addDefaultForm(selected);
          }}
        >
          Add
        </div>
      </Button>
    </div>
  );
};
