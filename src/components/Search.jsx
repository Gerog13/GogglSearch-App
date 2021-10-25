import React, { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import { useResultContext } from "../contexts/ResultContextProvider";
import { Links } from "./Links";

export const Search = () => {
  const [text, setText] = useState("");
  const { setSearchTerm } = useResultContext();
  const [debouncedValue] = useDebounce(text, 300);
  useEffect(() => {
    if (debouncedValue) setSearchTerm(debouncedValue);
  }, [debouncedValue]);
  return (
    <div className="relative sm:mx-auto sm:-mt-10 mt-3">
      <input
        value={text}
        type="text"
        placeholder="Search Goggl or type URL"
        onChange={(event) => setText(event.target.value)}
        className="sm:w-72 md:w-80 md:ml-0 lg:w-96 w-96 sm:ml-10 h-8 dark:bg-gray-200 border-2 border-transparent rounded-full shadow-sm outline-none p-6 text-black focus:ring-2 focus:ring-gray-200 transition ease-out duration-100"
      />
      {text && (
        <button
          type="button"
          className="absolute top-4 right-4 text-gray-900"
          onClick={() => setText("")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      )}
      <Links />
    </div>
  );
};
