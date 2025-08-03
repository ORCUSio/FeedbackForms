"use client";

import useAutoAnimate from "@/src/hooks/useAutoAnimate";
import { cn } from "@/src/lib/utils";
import { IoSearchOutline } from "react-icons/io5";

export default function Home() {
  return (
    <>
      <div className="flex justify-between">
        <Avatar onClick={() => {}} />
        <AvatarFrame />
      </div>

      <div>
        <Input />
      </div>
    </>
  );
}

const Input = () => {
  const { visible, parent, handleClick } = useAutoAnimate({
    defaultVisible: true,
  });

  return (
    <div ref={parent}>
      {visible ? (
        <div className="p-4" onClick={handleClick}>
          <IoSearchOutline />
        </div>
      ) : (
        <form className="max-w-md">
          <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
            Search
          </label>
          <div className="relative">
            <div
              className="absolute inset-y-0 start-0 flex items-center ps-3"
              onClick={handleClick}
            >
              <IoSearchOutline />
            </div>
            <input
              autoFocus
              type="search"
              id="default-search"
              className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search Mockups, Logos..."
              required
            />
            <button
              type="submit"
              className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Search
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

const AvatarFrame = () => {
  const { visible, parent, handleClick } = useAutoAnimate({
    defaultVisible: true,
  });

  return (
    <div className="mx-auto relative" ref={parent}>
      <Avatar onClick={handleClick} />
      {visible && <DropdownMenu />}
    </div>
  );
};

interface AvatarProp {
  onClick: () => void;
}
const Avatar = ({ onClick }: AvatarProp) => {
  return (
    <img
      onClick={onClick}
      id="avatarButton"
      data-dropdown-toggle="userDropdown"
      data-dropdown-placement="bottom-start"
      className={cn("w-10 h-10 rounded-full cursor-pointer")}
      src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
      alt="User dropdown"
    />
  );
};

const DropdownMenu = () => {
  return (
    <div
      id="userDropdown"
      className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700 dark:divide-gray-600 absolute"
    >
      <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
        <div>Bonnie Green</div>
        <div className="font-medium truncate">name@flowbite.com</div>
      </div>
      <ul
        className="py-2 text-sm text-gray-700 dark:text-gray-200"
        aria-labelledby="avatarButton"
      >
        <li>
          <a
            href="#"
            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            Dashboard
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            Settings
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            Earnings
          </a>
        </li>
      </ul>
      <div className="py-1">
        <a
          href="#"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
        >
          Sign out
        </a>
      </div>
    </div>
  );
};
