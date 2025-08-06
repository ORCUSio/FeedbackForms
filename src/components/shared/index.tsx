import useAutoAnimate from "@/src/hooks/useCustomAutoAnimate";
import { cn } from "@/src/lib/utils";
import useSelectedTypeStore from "@/src/store/useSelectedTypeStore";
import { SelectionTypes } from "@/src/types";

export const Button = ({
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
export const Dropdown = ({
  title,
  items,
}: {
  title?: string;
  items: SelectionTypes[];
}) => {
  const { handleClick, parent, visible } = useAutoAnimate({
    defaultVisible: false,
  });
  const { selected, setSelected } = useSelectedTypeStore();
  return (
    <div ref={parent} className="relative inline-block text-left w-full">
      <button
        onClick={handleClick}
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        className="w-full flex justify-between text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        <span>{selected}</span>
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
            {items.map((item, index) => (
              <DropdownItem
                key={index}
                onClick={() => {
                  setSelected(item);
                  handleClick();
                }}
              >
                {item}
              </DropdownItem>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export const DropdownItem = ({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: () => void;
}) => {
  return (
    <div
      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
      onClick={onClick}
    >
      {children}
    </div>
  );
};
