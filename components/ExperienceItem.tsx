import Link from "next/link";
import imageUrlBuilder from "@sanity/image-url";
import client from "../client";
import Image from "next/image";

const builder = imageUrlBuilder(client);

function urlFor(source: any) {
  return builder.image(source);
}

type Props = {
  link: string;
  image: any;
  title: string;
  text: string;
};

const ExperienceItem = ({ link, image, title, text }: Props) => {
  return (
    <Link href={"/experience/" + link}>
      <a
        data-aos="fade-up"
        className="hover-pepper experience-item flex flex-row border-b-2 border-stone-800"
      >
        <div className="relative min-w-[30vmin]">
          <Image
            src={urlFor(image).url()}
            alt={text}
            layout="fill"
            objectFit="cover"
            className="rounded-r-2xl"
          />
        </div>
        <div className="border-r-2 border-stone-800">
          <h3 className="active pl-[3vmin] pt-[3vmin] font-flex text-[3vmin] text-stone-800">
            {title}
          </h3>
          <p className="flex-grow px-[3vmin] pb-[3vmin] font-jet text-[4vmin] text-stone-800 transition-all">
            {text}
          </p>
        </div>
        <p className="arrow ml-auto self-center px-[3vmin] text-[12vmin] leading-[0em] transition-all">
          ⤷
        </p>
      </a>
    </Link>
  );
};

export default ExperienceItem;
