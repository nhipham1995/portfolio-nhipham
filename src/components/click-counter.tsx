import { useContext } from "react";
import Container from "./container";
import Title from "./ui/title";
import { ClickCounterContext } from "@/provider";
import ImageComponent from "./ui/image";

export default function ClickCounter() {
  const { clickCounter } = useContext(ClickCounterContext);

  return (
    <Container className="font-kennerly py-24 px-12 mx-auto grid lg:grid-cols-2 gap-4">
      <div className="col-span-1 lg:order-2 flex justify-center items-center">
        <ImageComponent
          src="/images/ice-cream.png"
          size="100"
          width={500}
          height={500}
          alt="Illustration pour jeux"
          className="w-auto"
        />
      </div>
      <div className="hover:bg-hover-bg col-span-1 flex flex-col justify-center items-center">
        <Title
          content="Devinez combien de click de souris que vous avez fait depuis l'ouvrage cette page? "
          type="h3"
          style="font-kennerly text-lg text-justify dark:text-gray-300"
          fontWeight="font-bold"
        />
        <div className="text-orange-500 text-2xl mt-3 flex justify-center ">
          <p className="p-2  px-4 bg-gray-100 dark:bg-gray-200 rounded">
            {clickCounter}
          </p>
        </div>
      </div>
    </Container>
  );
}
