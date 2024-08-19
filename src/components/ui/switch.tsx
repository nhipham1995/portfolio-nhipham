import { useState } from "react";

export default function Switch() {
  const [isLight, setIsLight] = useState(true);
  return (
    <div>
      {/* <div className="flex items-center">
        <input
          onChange={() => {
            setIsLight(!isLight);
          }}
          value={isLight.toString()}
          type="checkbox"
          id="hs-basic-with-description-unchecked"
          className="relative w-[3.25rem] h-7 p-px bg-gray-100 border-transparent text-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:ring-blue-600 disabled:opacity-50 disabled:pointer-events-none checked:bg-none checked:text-blue-600 checked:border-blue-600 focus:checked:border-blue-600
            before:inline-block before:size-6 before:bg-white checked:before:bg-blue-200 before:translate-x-0 checked:before:translate-x-full before:rounded-full before:shadow before:transform before:ring-0 before:transition before:ease-in-out before:duration-200"
        />
        <label
          htmlFor="hs-basic-with-description-unchecked"
          className="text-sm text-gray-500 ms-3"
        >
          {isLight.toString()}
        </label>
      </div> */}
      <input
        onChange={() => {
          setIsLight(!isLight);
        }}
        value={isLight.toString()}
        type="checkbox"
        id="hs-basic-usage"
        className="relative w-[3.25rem] h-7 p-px border border-1 bg-gray-100 border-transparent text-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:ring-blue-600 disabled:opacity-50 disabled:pointer-events-none checked:bg-none checked:text-blue-600 checked:border-blue-600 focus:checked:border-blue-600 dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-600 before:inline-block before:size-6 before:bg-white checked:before:bg-blue-200 before:translate-x-0 checked:before:translate-x-full before:rounded-full before:shadow before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-neutral-400 dark:checked:before:bg-blue-200"
      />
      <label
        htmlFor="hs-basic-with-description-unchecked"
        className="text-sm text-gray-500 ms-3"
      >
        {isLight ? "light" : "dark"}
      </label>
      {/* <div className="rounded">
        <label htmlFor="one">
          <input id="one" type="checkbox" className="border" />
        </label>
      </div> */}
    </div>
  );
}
