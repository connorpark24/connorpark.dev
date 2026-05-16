import Link from "next/link";
import Image from "next/image";
import { MapPin, Mail } from "lucide-react";
import { Nav } from "./nav";

const foodImages = [
  {
    src: "/gallery/daeho.jpeg",
    alt: "daeho",
    title: "Daeho",
    description: "San Francisco, CA",
  },
  {
    src: "/gallery/udon.jpeg",
    alt: "udon",
    title: "Udon",
    description: "Tokyo, Japan",
  },
  {
    src: "/gallery/tsujiki.jpeg",
    alt: "tsujiki",
    title: "Tsujiki",
    description: "Tokyo, Japan",
  },
  {
    src: "/gallery/rome-pasta.jpeg",
    alt: "rome-pasta",
    title: "Pasta",
    description: "Rome, Italy",
  },
  {
    src: "/gallery/republique.jpeg",
    alt: "republique",
    title: "République",
    description: "Los Angeles, CA",
  },
  {
    src: "/gallery/nubiani.jpeg",
    alt: "nubiani",
    title: "Nubiani",
    description: "New York City, NY",
  },
  {
    src: "/gallery/lindustrie.jpeg",
    alt: "lindustrie",
    title: "L'Industrie",
    description: "New York City, NY",
  },
];

const writings: { title: string; date: string; href: string }[] = [];

const travelImages = [
  {
    src: "/gallery/rosebowl.jpeg",
    alt: "rosebowl",
    title: "Rose Bowl 2024",
    description: "Pasadena, CA",
  },
  {
    src: "/gallery/alaska.jpeg",
    alt: "alaska",
    title: "Alaska",
    description: "",
  },
  {
    src: "/gallery/florence.jpeg",
    alt: "florence",
    title: "Florence",
    description: "Italy",
  },
  {
    src: "/gallery/costarica-tree.jpeg",
    alt: "costarica-tree",
    title: "La Fortuna",
    description: "Costa Rica",
  },
];

type GalleryImage = {
  src: string;
  alt: string;
  title: string;
  description: string;
};

function Gallery({ images }: { images: GalleryImage[] }) {
  return (
    <div className="grid grid-cols-2 gap-x-3 gap-y-6">
      {images.map((image) => (
        <div
          key={image.alt}
          id={`item-${image.alt}`}
          data-dial-item
          className="flex flex-col scroll-mt-24"
        >
          <div className="w-full aspect-square overflow-hidden rounded-sm">
            <Image
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
              width={1000}
              height={1000}
            />
          </div>
          <p className="text-foreground text-[15px] mt-3">{image.title}</p>
          {image.description && (
            <p className="text-muted-foreground text-[13px]">
              {image.description}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <div className="w-screen bg-background flex flex-col items-center">
      <Nav />
      <div className="p-4 w-full sm:w-3xl mt-16 sm:mt-28 mx-auto">
        <section id="home" className="flex flex-col mt-2 scroll-mt-2">
          <h1 className="text-2xl">Connor Park</h1>
          <p className=" text-muted-foreground text-[15px] mt-0.5">
            Co-Founder, CTO @{" "}
            <Link href="https://useskope.com">Skope [YC S25]</Link>.
          </p>
          <div className="flex items-center gap-3 text-muted-foreground text-[13px] mt-1.5">
            <div className="flex items-center gap-1.25">
              <MapPin className="h-3 w-3" strokeWidth={1.5} />
              <span>NYC</span>
            </div>
            <div className="flex items-center gap-1.5 ">
              <Mail className="h-3 w-3" strokeWidth={1.5} />
              <a href="mailto:connor@useskope.com">connor@useskope.com</a>
            </div>
          </div>
        </section>
        <section id="about" className="flex flex-col mt-12 scroll-mt-12">
          <p className=" text-foreground text-[15px]">About</p>
          <p className=" text-muted-foreground text-[15px] mt-0.5">
            I previously studied Computer Science at the University of Michigan,
            Ann Arbor. I enjoy trying new restaurants, playing golf, and
            watching Michigan Football.
          </p>
        </section>
        <section id="writing" className="flex flex-col mt-12 scroll-mt-12">
          <p className="text-foreground text-[15px] mb-4">Writing</p>
          {writings.length === 0 ? (
            <p className="text-muted-foreground text-[15px]">
              Nothing yet — coming soon.
            </p>
          ) : (
            <ul className="flex flex-col gap-2">
              {writings.map((post) => (
                <li
                  key={post.href}
                  className="flex justify-between items-baseline gap-4"
                >
                  <Link
                    href={post.href}
                    className="text-foreground text-[15px] hover:text-muted-foreground transition-colors"
                  >
                    {post.title}
                  </Link>
                  <span className="text-muted-foreground text-[13px]">
                    {post.date}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </section>
        <section id="food" className="flex flex-col mt-12 scroll-mt-12">
          <p className="text-foreground text-[15px] mb-4">Food</p>
          <Gallery images={foodImages} />
        </section>
        <section id="travel" className="flex flex-col mt-24 scroll-mt-24 mb-24">
          <p className="text-foreground text-[15px] mb-4">Travel</p>
          <Gallery images={travelImages} />
        </section>
      </div>
    </div>
  );
}
