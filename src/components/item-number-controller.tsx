import { ChangeEvent } from "react";

type ControllerProps = {
  photoPerTime: number;
  handlerInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  photoTotal: number;
};

export default function ItemNumberController({
  photoPerTime,
  handlerInputChange,
  photoTotal,
}: ControllerProps) {
  const handlerChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    let error = false;
    if (
      value < 1 ||
      value > (photoTotal ?? 0) ||
      value === null ||
      value === undefined
    ) {
      error = true;
      return;
    }
    handlerInputChange(e);
  };

  return (
    <div>
      <div className="max-w-sm ">
        <label htmlFor="number-input">
          <span className="block mb-0.5 mr-2 text-sm font-medium text-leafgreen-600 dark:text-gray-300 inline">
            Photos par page
          </span>

          <input
            type="number"
            id="number-input"
            aria-describedby="helper-text-explanation"
            className="inline w-24 peer border border-gray-300 text-primary-700 text-sm font-bold rounded-lg focus:ring-blue-500 focus:border-blue-500 block  py-1 px-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-600 "
            placeholder={photoPerTime.toString()}
            required
            defaultValue={photoPerTime}
            min={1}
            max={photoTotal}
            onChange={(e) => handlerChange(e)}
          />

          <span className="mt-2 hidden text-xs  text-gray-600 dark:text-gray-300  peer-[&:not(:placeholder-shown):focus:invalid]:block">
            Accept only a number between 1 and {photoTotal}
          </span>
          <span className="mt-2 hidden text-xs text-red-500  peer-[&:not(:placeholder-shown):not(:focus):invalid]:block ">
            Accept only a number between 1 and {photoTotal}
          </span>
        </label>
      </div>
      <div></div>
    </div>
  );
}
