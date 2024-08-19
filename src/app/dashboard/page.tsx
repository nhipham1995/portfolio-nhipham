// have to set the name as page.tsx in each folder to indicate that is routable

import Title from "@/components/ui/title";
import Image from "@/components/ui/image";

export default function Dashboard() {
  return (
    <main className=" bg-hero-pattern bg-opacity-80 dark:bg-opacity-50 min-h-[calc(100vh-_210px)] bg-contain">
      <div className="mx-auto mt-20 grid grid-cols-5 grid-flow-row gap-4 max-w-7xl p-6 lg:px-8 mb-5">
        <div className="col-span-3 min-h-96">
          <Title
            type="h1"
            color="text-primary-800"
            content="Dévellopeuse web Full-Stack et une photographe amateuse "
            fontWeight="font-black"
            style="mb-4 font-beloved-sans dark:text-primary-200"
          />
          <p className="text-primary-700 dark:text-primary-300 antialiased text-justify  font-plantin mt-10 font-medium text-xl">
            Après avoir fini l’alternance presque 2 ans chez Mobalib, je
            souhaiterais mettre à profit mes compétences encore au service d’une
            entreprise. En recherche active d’une autre alternance, ma curiosité
            et mon implication feront la différence. Je porte un intérêt
            particulier pour la conception et le design de sites web,
            contactez-moi !
            {/* <a
              href="/@"
              className="text-orange-600 hover:bg-long-hover-bg hover:text-semibold"
            >
              contactez-moi !
            </a> */}
          </p>
          <div className="flex justify-end text-amber-600 ">
            <div className="pt-2 pb-1 flex justify-center ">
              <p className="lg:text-lg xl:text-xl font-beloved-or pt-1">h </p>
              <Title
                type="h2"
                content=" Nhi Pham "
                color="text-amber-600"
                fontWeight="font-bold"
                style=" mb-2 antialiased text-right lg:text-lg xl:text-2xl font-beloved-script hover:bg-long-hover-bg "
              />
              <p className="lg:text-lg xl:text-xl font-beloved-or pt-0.5"> j</p>
            </div>
          </div>
        </div>
        <div className="col-span-2 flex items-start justify-center">
          <Image
            src={"/images/ava.jpg"}
            alt="Photo of admin"
            height={220}
            width={220}
            className="rounded-full "
          />
        </div>
      </div>
    </main>
  );
}
