import clsx from "clsx";
import Slider from "./ui/slider";
import { useObserveElementHeight } from "./utils/use-observer-element-height";
import { CloseIcon } from "./svgs";

type ModalProps = {
  open: boolean;
  photos: {
    alt: string;
    src: string;
  }[];
  modalClose: () => void;
  firstImg?: number;
  activeImg?: (a: number) => void;
};

export default function Modal({
  open,
  photos,
  modalClose,
  firstImg,
  activeImg,
}: ModalProps) {
  const { ref, height } = useObserveElementHeight<HTMLDivElement>();
  const handlerCloseModal = () => {
    modalClose();
  };
  return (
    <div>
      <div
        ref={ref}
        className={clsx(
          { hidden: !open },
          "bg-black/60 h-screen w-full bottom-100 fixed text-white px-4 py-36 xs:p-[50px] bg-overlay/50 backdrop-opacity-disabled w-screen h-screen fixed inset-0"
        )}
      >
        {open && (
          <Slider
            photos={photos}
            slidePerView={1}
            height={height - 20}
            classNames="z-40"
            slideStyle="rounded-3xl"
            firstImg={firstImg}
            activeImg={(ind) => activeImg?.(ind)}
            // add key with variable that we want the Slider will rerender when this variable changes
            key={firstImg}
          />
        )}

        <div
          className="bg-primary-700 rounded-full p-2 absolute right-10 top-40 xs:right-20 xs:top-20 z-10 hover:cursor-pointer hover:bg-primary-800 group transition"
          onClick={handlerCloseModal}
        >
          <CloseIcon
            size={25}
            className="p-1 fill-gray-100 group-hover:fill-gray-50"
          />
        </div>
      </div>
    </div>
  );
}
