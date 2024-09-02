import { useEffect, useState } from "react";
import Button from "./ui/button";
import { ChevronDownIcon } from "./svgs";
type PagProps = {
  onChange: (a: number) => void;
  pageTotal: number;
};
export default function Pagination({ onChange, pageTotal }: PagProps) {
  const [active, setActive] = useState(1);

  useEffect(() => {
    onChange(active);
  }, [active]);

  const getItemProps = (index: number) =>
    ({
      className: active === index ? "text-gray-100 bg-primary-500 " : "",
      onClick: () => {
        setActive(index);
      },
    } as any);

  const next = () => {
    if (active === pageTotal - 1) return;

    setActive(active + 1);
  };

  const prev = () => {
    if (active === 0) return;

    setActive(active - 1);
  };

  const shortedList =
    active >= 2 && active < pageTotal - 2 ? (
      <div className="flex justify-end gap-3">
        <Button {...getItemProps(0)} des={1} key={1} />
        <p className="mt-9">...</p>
        <Button {...getItemProps(active - 1)} des={active} key={active} />

        <Button {...getItemProps(active)} des={active + 1} key={active + 1} />
        <Button
          {...getItemProps(active + 1)}
          des={active + 2}
          key={active + 2}
        />

        <p className="mt-9">...</p>
        <Button
          {...getItemProps(pageTotal - 1)}
          des={pageTotal}
          key={pageTotal}
        />
      </div>
    ) : active < 2 ? (
      <div className="flex justify-end gap-3">
        <Button {...getItemProps(0)} des={1} key={1} />
        <Button {...getItemProps(1)} des={2} key={2} />
        <p className="mt-9">...</p>
        <Button
          {...getItemProps(pageTotal - 1)}
          des={pageTotal}
          key={pageTotal}
        />
      </div>
    ) : (
      <div className="flex justify-end gap-3">
        <Button {...getItemProps(0)} des={1} key={1} />

        <p className="mt-9">...</p>
        <Button
          {...getItemProps(pageTotal - 2)}
          des={pageTotal - 1}
          key={pageTotal - 1}
        />
        <Button
          {...getItemProps(pageTotal - 1)}
          des={pageTotal}
          key={pageTotal}
        />
      </div>
    );

  const buttonList =
    pageTotal > 6
      ? shortedList
      : Array.from(Array(pageTotal).keys()).map((item, i) => (
          <Button {...getItemProps(i)} des={i + 1} key={i} />
        ));
  return (
    <div className="flex items-center justify-center gap-5 mt-12">
      <Button
        des={
          <ChevronDownIcon
            size={15}
            className="rotate-90 my-1 mx-0 group-hover:fill-gray-200"
          />
        }
        downloadable={false}
        onClick={prev}
        disabled={active === 0 ? true : false}
        className="font-circe group"
      />

      <div className="flex items-center gap-3">{buttonList}</div>

      <Button
        des={
          <ChevronDownIcon
            size={15}
            className="-rotate-90 my-1 mx-0 disabled:fill-gray-200 group-hover:fill-gray-200 group-disabled:fill-gray-200"
          />
        }
        className="font-circe group group-disabled  "
        downloadable={false}
        onClick={next}
        disabled={active === pageTotal - 1 ? true : false}
      />
    </div>
  );
}
