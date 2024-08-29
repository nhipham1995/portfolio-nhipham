import AlbumCard from "@/components/album-card";
import Container from "@/components/container";
import Image from "@/components/ui/image";
import Title from "@/components/ui/title";
import { albums } from "../data";

export default function Page() {
  return (
    <div>
      <div className="flex justify-center bg-leafgreen-900 py-16">
        <Image
          src={"/blogs/intro.png"}
          height={800}
          width={800}
          alt="Background illustration "
          className="p-4"
        />
      </div>
      <Container className="mt-15 p-5">
        <div className="flex gap-3 lg:gap-6 justify-center items-center mt-24 mb-12 lg:mt-48 lg:mb-24">
          <p className="font-beloved-or text-3xl">n </p>
          <Title
            content="Decouvrir des albums"
            type="h4"
            style="font-beloved-script text-4xl xl:text-6xl bg-long-hover-bg  flex justify-center"
            color="text-leafgreen-800"
          />
          <p className="font-beloved-or text-3xl">n</p>
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
