import { useContext } from "react";
import Container from "./container";
import Title from "./ui/title";
import { ClickCounterContext } from "@/provider";

export default function ClickCounter() {
  const { clickCounter } = useContext(ClickCounterContext);

  return (
    <Container className="font-kennerly py-10 max-w-96 mx-auto">
      <Title
        content="Combien de click que vous avez fait depuis l'ouvrage cette page? "
        type="h3"
        style="font-kennerly text-lg text-justify dark:text-gray-300"
        fontWeight="font-bold"
      />
      <div className="text-orange-500 text-3xl flex justify-center ">
        <p className="p-2  px-4 bg-gray-100 dark:bg-gray-200 rounded">
          {clickCounter}
        </p>
      </div>
    </Container>
  );
}
