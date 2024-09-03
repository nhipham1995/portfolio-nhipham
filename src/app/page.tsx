"use client";
// have to set the name as page.tsx in each folder to indicate that is routable

import Title from "@/components/ui/title";
import ImageComponent from "@/components/ui/image";
import { LinkedinIcon, GithubIcon, MailIcon } from "@/components/svgs";
import CardItem from "@/components/card-item";
import Button from "@/components/ui/button";
import { useContext } from "react";
import { ClickCounterContext } from "@/provider";
import ClickCounter from "@/components/click-counter";

export default function Home() {
  const { clickCounter, setClickCounter } = useContext(ClickCounterContext);

  return (
    <main
      onClick={() => {
        setClickCounter(clickCounter + 1);
      }}
    >
      <div className="  bg-opacity-80 dark:bg-opacity-50 min-h-[calc(100vh-_200px)]  bg-contain pb-12">
        <div className="mx-auto mt-8 md:mt-20 flex gap-9 flex-col lg:grid lg:grid-cols-5 2xl:pt-32 lg:gap-4 max-w-7xl 2xl:max-w-8xl p-6 lg:px-8 xl:mb-5 2xl:mb-16">
          <div className="lg:col-span-3 lg:min-h-96 order-2 xl:order-1">
            <Title
              type="h1"
              color="text-primary-800"
              content="Dévellopeuse web Full-Stack et une photographe amateuse "
              fontWeight="font-black"
              style="lg:mb-4 font-beloved-sans dark:text-primary-200 text-center md:text-left "
            />
            <p className="text-primary-700 dark:text-primary-300 antialiased text-justify text-base  font-plantin mt-3 md:mt-10 font-medium md:text-xl ">
              Après avoir fini l’alternance presque 2 ans chez Mobalib, je
              souhaiterais mettre à profit mes compétences encore au service
              d’une entreprise. En recherche active d’une autre alternance, ma
              curiosité et mon implication feront la différence. Je porte un
              intérêt particulier pour la conception et le design de sites web,
              contactez-moi !
            </p>
            <div className="flex justify-end text-amber-600 ">
              <div className="pt-3 pb-1 flex justify-center ">
                <p className="lg:text-lg xl:text-xl font-beloved-or pt-1">h </p>
                <Title
                  type="h2"
                  content=" Nhi Pham "
                  color="text-amber-600"
                  fontWeight="font-bold"
                  style=" mb-2 antialiased text-right lg:text-lg xl:text-2xl font-beloved-script  "
                />
                <p className="lg:text-lg xl:text-xl font-beloved-or pt-0.5">
                  {" "}
                  j
                </p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-2  order-1 lg:order-2 w-full mx-auto ">
            <div className="flex items-start justify-center px-32 md:px-24 xl:px-28 mb-4">
              <ImageComponent
                src={"/images/ava.jpg"}
                alt="Photo of admin"
                height={200}
                width={200}
                className="rounded-full  "
              />
            </div>

            <div className="flex justify-center gap-4 mt-3 ">
              <a className="cursor-pointer ">
                <GithubIcon
                  size={25}
                  className="fill-gray-400 hover:fill-amber-600 transition "
                />
              </a>
              <a>
                <LinkedinIcon
                  size={25}
                  className="fill-gray-400 hover:fill-amber-600 transition "
                />
              </a>
              <a className="cursor-pointer ">
                <MailIcon
                  size={25}
                  className="fill-gray-400 hover:fill-amber-600 transition "
                />
              </a>
            </div>
          </div>
        </div>
        <div className="h-12 md:h-20 lg:h-28 2xl:h-36 bg-flower-pattern bg-contain xl:mt-28"></div>
      </div>
      <div className="md:grid md:grid-cols-5 md:gap-4 justify-center font-kennerly max-w-7xl mx-auto pt-12 ">
        <div className="flex md:col-span-2 justify-center items-center w-full hidden md:block">
          <ImageComponent
            src="/images/rosemary.png"
            height={500}
            width={500}
            alt="Illustrator of rosemary"
          />
        </div>
        <div className="p-4 md:p-0 md:col-span-3 ">
          <div className="border rounded-xl py-5 px-6">
            <div className="flex items-center gap-6 mb-9 divide border-gray-200">
              <ImageComponent
                src="/images/portrait.png"
                height={30}
                width={30}
                alt="Work Image"
              />
              <Title
                type="h4"
                content="Travail"
                fontWeight="font-bold"
                color="text-primary-700"
                style="text-3xl dark:text-gray-200"
              />
            </div>
            <CardItem
              src={"/logo/mobalib-2.svg"}
              size={50}
              altImg={"Illustration pour Mobalib"}
              title="Mobalib"
              description="  Alternance en informatique"
              time="2022-2024"
              goToLink="/projects/mobalib"
              company="https://www.mobalib.com/"
            />
            <CardItem
              src={"/logo/lifat.png"}
              size={60}
              altImg={"Lifat Université"}
              title="Université de Tours (LIFAT)"
              description=" Stage en informatique"
              time="9/2022-12/2022"
              goToLink="/projects/lifat"
              company="https://lifat.univ-tours.fr/"
            />
            <CardItem
              src={"/logo/lifat.png"}
              size={60}
              altImg={"Lifat Université"}
              title="Université de Tours (LIFAT)"
              description=" Stage en informatique"
              time="9/2022-12/2022"
              goToLink="/projects/lifat"
            />
            {/* <CardItem
              src={"/images/portrait.png"}
              size={50}
              altImg={"Illustration pour Mobalib"}
              title="Mobalib"
              description="  Alternance en informatique"
              time="2022-2024"
            />
            <CardItem
              src={"/images/portrait.png"}
              size={50}
              altImg={"Illustration pour Mobalib"}
              title="Mobalib"
              description="  Alternance en informatique"
              time="2022-2024"
            /> */}
            {/* <div className="bg-primary-200 dark:bg-primary-300 dark:hover:bg-primary-500 rounded-xl p-3 w-full mt-6 flex justyfy-center items-center hover:bg-primary-700 transition text-primary-700 hover:text-primary-200 ">
              <p className="text-center w-full font-bold ">
                Télécharger mon CV
              </p>
            </div> */}
            <Button
              downloadable={true}
              des=" Télécharger mon CV"
              src="/files/cv.pdf"
              fillWidth
            />
          </div>
        </div>
      </div>
      <div>
        <ClickCounter />
      </div>
    </main>
  );
}
