import Image from "@/components/ui/image";
import Title from "@/components/ui/title";

export default function Page() {
  return (
    <div className="max-w-7xl mx-auto font-kennerly px-16">
      <div className="flex justify-between mt-6">
        <div>
          {" "}
          <Title
            type="h2"
            content="Alternance chez Mobalib"
            style="font-bold dark:text-primary-200"
          />
          <p className="text-primary-400  leading-10 font-light tracking-wide">
            2022-2024
          </p>
        </div>
        <div>
          <Image
            src="/logo/mobalib.svg"
            height={100}
            width={150}
            alt="Mobalib logo"
          />
        </div>
      </div>
      <div className="flex justify-end text-gray-500 text-bold text-lg italic pb-8">
        <p>
          HTML, CSS, Javascript, React, TypeScript, NextJS, Tailwind, React
          Native, Figma, Git, Github
        </p>
      </div>
      <div className="mt-8">
        <p className="tracking-wide text-xl text-primary-800 dark:text-primary-300 pb-10 leading-9 text-justify">
          Mobalib est une entreprise spécialisée dans l'amélioration de
          l'accessibilité pour les personnes en situation de handicap. Son
          objectif principal est de soutenir les administrations publiques et
          les entreprises privées dans leurs démarches d'accessibilité, que ce
          soit par la conception de produits plus inclusifs ou par l'évaluation
          des services existants. En plus d'offrir des solutions numériques
          adaptées pour collecter et diffuser des données sur l'accessibilité,
          Mobalib se concentre sur l'accompagnement des organisations dans leur
          montée en compétence. Leur conviction est que rendre les services plus
          accessibles pour les personnes les plus contraintes simplifie
          l'expérience pour tous.
        </p>

        <p className="tracking-wide text-xl text-primary-800 dark:text-primary-300 leading-9 text-justify pb-10">
          En tant que concepteur de design et développeur web, j'ai eu
          l'opportunité de participer à la création de leur site web, un projet
          qui a renforcé mes compétences techniques tout en m'immergeant dans le
          domaine de l'accessibilité numérique. Le défi consistait non seulement
          à concevoir une interface esthétique et fonctionnelle, mais aussi à
          m'assurer que chaque aspect du site soit accessible à tous, y compris
          aux personnes en situation de handicap.
        </p>
        <div className="flex justify-center my-6 gap-24">
          <div className="flex justify-center gap-1 flex-col">
            <a href="https://www.mobalib.com/" target="_blank">
              <Image
                src="/screenshot/mobalib.png"
                height={250}
                width={250}
                alt="Capture d'écran du site Mobalib"
                className="rounded-lg shadow "
              />
            </a>
            <p className="text-xs text-gray-400 text-plantin text-center">
              Le site Mobalib{" "}
            </p>
          </div>
          <div className="flex justify-center gap-1 flex-col">
            <a href="https://www.mobalink.com/" target="_blank">
              <Image
                src="/screenshot/mobalink.png"
                height={265}
                width={265}
                alt="Capture d'écran du site Mobalink"
                className="rounded-lg shadow "
              />
            </a>
            <p className="text-xs text-gray-400 text-plantin text-center">
              Le site Mobalink{" "}
            </p>
          </div>
          <div className="flex justify-center items-center gap-1 flex-col">
            <a
              href="https://apps.apple.com/us/app/mobalink/id1468084764"
              target="_blank"
            >
              <Image
                src="/screenshot/mobalink-app.png"
                height={265}
                width={75}
                alt="Capture d'écran du site Mobalib"
                className="rounded-xl shadow "
              />
            </a>
            <p className="text-xs text-gray-400 text-plantin text-center">
              L'application Mobalink{" "}
            </p>
          </div>
        </div>
        <p className="tracking-wide text-xl text-primary-800 dark:text-primary-300 leading-9 text-justify">
          Précisement, ma mission consiste principalement à concevoir le design
          du site sur Figma et à intégrer la page Mobalib en utilisant React,
          TypeScript, Next.js et Tailwind. Le site Mobalib est destiné à
          présenter l'entreprise, tandis que la page Mobalink sert à afficher
          des dossiers d'accessibilité et les services développés par Mobalib.
          Par ailleurs, j'ai contribué à la création du design et de composants
          génériques pour l'application MobaLink (React Native). Cette
          application, conçue comme un réseau social, permet aux utilisateurs de
          partager des informations utiles, poser des questions, et acquérir des
          connaissances, favorisant ainsi le soutien d'une communauté dédiée aux
          personnes en situation de handicap.
        </p>
        <p className="text-right text-sm text-gray-400 mt-5"> 20/08/2024</p>
      </div>
    </div>
  );
}
