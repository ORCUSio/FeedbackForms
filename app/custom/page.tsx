"use client";
import {
  ParagraphEntity,
  MultipleChoiceEntity,
  CheckboxEntity,
  DropdownEntity,
  RatingEntity,
  ShortAnswerEntity,
} from "@/src/components/Entity";
import {
  HelpingText,
  ActionButton,
} from "@/src/components/specificComponents/Custom";
import useAutoAnimate from "@/src/hooks/useCustomAutoAnimate";
import { cn } from "@/src/lib/utils";
import useFormAdded from "@/src/store/useFormAdded";
import useSelectedTypeStore from "@/src/store/useSelectedTypeStore";
import { Selections, SelectionTypes, selectionValues } from "@/src/types";
import React, { JSX } from "react";
import { useStore } from "zustand";

function Custom() {
  const { setFormAdded, addDefaultForm, formAdded } = useFormAdded();
  const { selected } = useSelectedTypeStore();

  const renderForm = (item: Selections) => {
    switch (item.type) {
      case "Paragraph":
        return <ParagraphEntity key={item.toString()} item={item} />;
      case "Multiple Choice":
        return <MultipleChoiceEntity key={item.toString()} item={item} />;
      case "Checkbox":
        return <CheckboxEntity key={item.toString()} item={item} />;
      case "Dropdown":
        return <DropdownEntity key={item.toString()} item={item} />;
      case "Rating":
        return <RatingEntity key={item.toString()} item={item} />;
      case "Short Answer":
        return <ShortAnswerEntity key={item.toString()} item={item} />;
    }
  };

  return (
    <div className="mx-auto">
      <div className="w-[720px] rounded-2xl border-gray-400">
        <div className="px-4 py-5 rounded-2xl border-b border-r border-l border-gray-400 flex flex-col gap-5">
          <HelpingText />
          <ActionButton />
        </div>
        <div>
          <div className="p-4">
            <h2 className="text-lg font-semibold">Preview</h2>
            {formAdded.length == 0 ? (
              <div className="mt-4">
                <p className="text-gray-600">No elements added yet.</p>
              </div>
            ) : (
              <div className="mt-4">
                {formAdded.map((item, index) => (
                  <div key={index} className="border-b border-gray-200 py-2">
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-gray-600">{item.paragraph}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Custom;
