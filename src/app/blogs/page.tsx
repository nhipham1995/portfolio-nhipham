import AlbumCard from "@/components/album-card";
import Container from "@/components/container";
import Title from "@/components/ui/title";
import { albums } from "../data";
import ImageComponent from "@/components/ui/image";

export default function Page() {
  return (
    <div>
      <div className="flex justify-center bg-leafgreen-900 py-16 2xl:py-32">
        <ImageComponent
          src={"/blogs/intro.png"}
          height={800}
          width={800}
          alt="Background illustration "
          className="p-4"
        />
      </div>
      <Container className="mt-15 p-5">
        <div className="flex md:gap-3 lg:gap-6 justify-center items-center mt-24 mb-12 lg:mt-48 lg:mb-24">
          <p className="font-beloved-or text-3xl hidden md:block">n </p>
          <Title
            content="Découvrir des albums"
            type="h3"
            style=" font-beloved-script text-7xl lg:text-7xl xl:text-7xl bg-long-hover-bg dark:text-primary-100 flex justify-center"
            color="text-leafgreen-800"
          />
          <p className="font-beloved-or text-3xl hidden md:block">n</p>
        </div>

        <div>
          {albums.map((album, i) => (
            <AlbumCard
              key={i}
              photos={album?.photos}
              title={album.title}
              description={album?.description}
              date={album.date}
              isImageRight={i % 2 === 0}
              location={album?.position}
              id={album.id}
            />
          ))}
        </div>
      </Container>
    </div>
  );
}
