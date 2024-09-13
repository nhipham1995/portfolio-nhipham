import Container from "@/components/container";
import Button from "@/components/ui/button";
import ImageComponent from "@/components/ui/image";
import Title from "@/components/ui/title";
import Link from "next/link";

export default function Custom404() {
  return (
    <Container className=" justify-center items-center p-0 pb-9 -mt-9">
      <div className=" flex justify-end">
        <ImageComponent
          src="/images/404.png"
          height={1200}
          width={1200}
          alt="Illustration pour la page 404"
          className="px-2 lg:px-20"
        />
      </div>
      <Title
        content="Page Introuvable 404"
        type="h2"
        style=" font-kennerly text-center dark:text-gray-300 xl:text-6xl mt-4"
        color="text-primary-600"
      />

      <p className="flex justify-center text-center mt-8 font-orphe xl:text-2xl tracking-wider text-leafgreen-700 dark:text-primary-300">
        La page que vous cherchez soit renommée, supprimée ou n&rsquo;est
        peut-être pas correcte.
      </p>
      <div className="flex justify-center">
        <div className="w-72 flex justify-center px-5">
          <Link href={"/"}>
            <Button
              downloadable={false}
              des={"Retournez la page d'accueil"}
              className="font-plantin"
            />
          </Link>
        </div>
      </div>
    </Container>
  );
}
