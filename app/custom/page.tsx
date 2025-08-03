"use client";
import useAutoAnimate from "@/src/hooks/useAutoAnimate";
import { cn } from "@/src/lib/utils";
import React, { JSX } from "react";

function Custom() {
  const HelpingText = () => (
    <div className="text-md text-gray-500 font-medium">
      <p>select a type and add an element</p>
      <p>
        it will add the element onto screen and changes will be saved on publish
      </p>
    </div>
  );

  const ActionButton = () => (
    <div className="flex justify-between">
      <Dropdown
        title="Add an element"
        items={[
          <DropdownItem key="1">Dashboard</DropdownItem>,
          <DropdownItem key="2">Settings</DropdownItem>,
          <DropdownItem key="3">Profile</DropdownItem>,
          <DropdownItem key="4">Logout</DropdownItem>,
        ]}
      />
      <Button>Add</Button>
    </div>
  );
  return (
    <div className="mx-auto">
      <div className="w-[720px] rounded-2xl border-gray-400">
        <div className="px-4 py-5 rounded-2xl border-b border-r border-l border-gray-400 flex flex-col gap-5">
          <HelpingText />
          <ActionButton />
        </div>
      </div>
    </div>
  );
}

export default Custom;

const Button = ({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <button
      {...props}
      className={cn(
        "group flex h-10 items-center justify-center rounded-md border border-gray-600 bg-gradient-to-b from-gray-400 via-gray-500 to-gray-600 px-4 text-neutral-50 shadow-[inset_0_1px_0px_0px_#d1d5db] hover:bg-gradient-to-b hover:from-gray-600 hover:via-gray-600 hover:to-gray-600 active:[box-shadow:none]",
        className
      )}
    >
      <span className="block group-active:[transform:translate3d(0,1px,0)]">
        {children}
      </span>
    </button>
  );
};
const Dropdown = ({
  title,
  items,
}: {
  title?: string;
  items: React.ReactNode[];
}) => {
  const { handleClick, parent, visible } = useAutoAnimate({
    defaultVisible: false,
  });
  return (
    <div ref={parent} className="relative inline-block text-left w-full">
      <button
        onClick={handleClick}
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        className="w-full flex justify-between text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        <span>{title || "Dropdown"}</span>
        <svg
          className="w-2.5 h-2.5 ms-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      {visible && (
        <div
          id="dropdown"
          className="z-10 w-full absolute bg-white divide-y divide-gray-100 rounded-lg shadow-sm dark:bg-gray-700"
        >
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownDefaultButton"
          >
            {...items}
          </ul>
        </div>
      )}
    </div>
  );
};

const DropdownItem = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <a
        href="#"
        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
      >
        {children}
      </a>
    </div>
  );
};
