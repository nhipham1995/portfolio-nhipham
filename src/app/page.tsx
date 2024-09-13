"use client";
// have to set the name as page.tsx in each folder to indicate that is routable

import Title from "@/components/ui/title";
import ImageComponent from "@/components/ui/image";
import { LinkedinIcon, GithubIcon, MailIcon, SunIcon } from "@/components/svgs";
import CardItem from "@/components/card-item";
import Button from "@/components/ui/button";
import { useContext } from "react";
import { ClickCounterContext } from "@/provider";
import ClickCounter from "@/components/click-counter";
import Container from "@/components/container";
import Link from "next/link";
import PortfolioCard from "@/components/portfolio-item";

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
              content="Dévellopeuse web Front-end et une photographe amateuse "
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
        <div className="h-12 px-3 md:h-20 lg:h-28 2xl:h-36 bg-flower-pattern bg-contain xl:mt-28"></div>
      </div>
      <div className=" py-36  bg-gradient-to-b from-white to-primary-100/40 dark:bg-none ">
        <div className="md:grid md:grid-cols-5 md:gap-4 justify-center font-kennerly  mx-auto max-w-7xl">
          <div className="flex md:col-span-2 justify-center items-center w-full hidden md:block">
            <ImageComponent
              src="/images/rosemary.png"
              height={500}
              width={500}
              alt="Illustrator of rosemary"
            />
          </div>
          <div className="p-4  md:col-span-3 ">
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
                detail={true}
              />
              <CardItem
                src={"/logo/lifat.png"}
                size={60}
                altImg={"Lifat Université"}
                title="Université de Tours (LIFAT)"
                description=" Stage en informatique"
                time="9/2021-12/2021"
                goToLink="/projects/lifat"
                company="https://lifat.univ-tours.fr/"
                detail={true}
              />
              <CardItem
                src={"/logo/cefim.jpeg"}
                size={60}
                altImg={"CEFIM L'école du web et des réseaux"}
                title="CEFIM - L'école du web et des réseaux"
                description="Projet client en Wordpress"
                time="5/2021- 8/2021"
                goToLink="/projects/lifat"
                detail={false}
              />

              <Button
                downloadable={true}
                des=" Télécharger mon CV"
                src="/files/cv.pdf"
                fillWidth
              />
            </div>
          </div>
        </div>
      </div>
      <Container className="mt-12 lg:mt-48">
        <Title
          type="h2"
          content="PORTFOLIO"
          style="xl:text-base lg:mx-24 mb-4 font-semibold"
          color="text-primary-950"
        />
        <PortfolioCard
          title="MobaLib"
          description="Mobalib est une plateforme collaborative dédiée à l'accessibilité,
          permettant aux personnes en situation de handicap de trouver et
          partager des lieux et services adaptés. "
          tech={["React", "NextJS", "Typescript", "Tailwind CSS"]}
          link="https://www.mobalib.com/"
          srcImg="/screenshot/mobalib.png"
          altImg="Illustration du site Mobalib"
        />
        <PortfolioCard
          title="MobaLink"
          description="Mobalink est une plateforme pour présenter une application chez MobaLib: interactions, exploration, messagerie."
          tech={["React", "NextJS", "Typescript", "Tailwind CSS"]}
          link="https://www.mobalink.fr/"
          srcImg="/screenshot/mobalink.png"
          altImg="Illustration du site Mobalink"
          reverseOrder
        />
        <PortfolioCard
          title="MobaLink Application"
          description="Mobalink est une appli qui permet aux personnes en situation handicap de communiquer et s'échanger des informations. J'étais responsable de créer la conception pour la partie Messagerie et le profile de d'utilisateur dans cette appli, ainsi que je travaille pour créer des composants atomiques et génériques."
          tech={["React Native", "Typescript", "Tailwind CSS"]}
          link="https://apps.apple.com/us/app/mobalink/id1468084764"
          srcImg="/screenshot/mobalink-app-2.png"
          altImg="Illustration de l'appli Mobalink"
        />
        <PortfolioCard
          title="Jeu: Tic-toc-toe "
          description="Tic-toc-toe est un jeu que l'utilisateur peut décider la dimension de jeux, aussi choisir de jouer avec son ami ou de jouer avec la machine."
          tech={["React", "Typescript", "Tailwind CSS"]}
          link="/projects/tictoctoe"
          srcImg="/screenshot/tictoctoe.png"
          altImg="Illustration du jeu"
          reverseOrder={true}
        />
      </Container>
      <div>
        <ClickCounter />
      </div>
    </main>
  );
}
