import Link from "next/link";
import Image from "next/image";
import { MapPin, Mail } from "lucide-react";

const foodImages = [
  {
    src: "/gallery/daeho.jpeg",
    alt: "daeho",
    colSpan: 3,
    message: "San Francisco, CA",
  },
  {
    src: "/gallery/ribeyes.jpeg",
    alt: "ribeyes",
    colSpan: 3,
    message: "Ribeyes",
  },
  {
    src: "/gallery/udon.jpeg",
    alt: "udon",
    colSpan: 3,
    message: "Tokyo, Japan",
  },
  {
    src: "/gallery/tsujiki.jpeg",
    alt: "tsujiki",
    colSpan: 3,
    message: "Tokyo, Japan",
  },
  {
    src: "/gallery/rome-pasta.jpeg",
    alt: "rome-pasta",
    colSpan: 4,
    message: "Rome, Italy",
  },
  {
    src: "/gallery/republique.jpeg",
    alt: "republique",
    colSpan: 4,
    message: "Los Angeles, CA",
  },
  {
    src: "/gallery/nubiani.jpeg",
    alt: "nubiani",
    colSpan: 4,
    message: "New York City, NY",
  },
  {
    src: "/gallery/lindustrie.jpeg",
    alt: "lindustrie",
    colSpan: 3,
    message: "New York City, NY",
  },
];

const travelImages = [
  {
    src: "/gallery/rosebowl.jpeg",
    alt: "rosebowl",
    colSpan: 5,
    message: "Rose Bowl 2024 - Pasadena, CA",
  },
  { src: "/gallery/yc-s25.jpeg", alt: "yc-s25", colSpan: 4, message: "YC S25" },
  {
    src: "/gallery/ollie-tongue.jpeg",
    alt: "ollie-tongue",
    colSpan: 3,
    message: "Ollie",
  },
  { src: "/gallery/alaska.jpeg", alt: "alaska", colSpan: 5, message: "Alaska" },
  {
    src: "/gallery/florence.jpeg",
    alt: "florence",
    colSpan: 4,
    message: "Florence, Italy",
  },
  {
    src: "/gallery/costarica-tree.jpeg",
    alt: "costarica-tree",
    colSpan: 3,
    message: "La Fortuna, Costa Rica",
  },
];

type GalleryImage = {
  src: string;
  alt: string;
  colSpan: number;
  message: string;
};

function Gallery({ images }: { images: GalleryImage[] }) {
  return (
    <div className="grid grid-cols-12 gap-2">
      {images.map((image) => {
        const colSpanClass = {
          3: "col-span-3",
          4: "col-span-4",
          5: "col-span-5",
        }[image.colSpan];

        return (
          <div
            key={image.alt}
            className={`${colSpanClass} h-24 sm:h-32 lg:h-40 overflow-hidden rounded-md`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
              width={500}
              height={500}
            />
          </div>
        );
      })}
    </div>
  );
}

export default function Home() {
  return (
    <div className="w-screen bg-background flex flex-col items-center">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
        <div className="w-full sm:w-3xl mx-auto px-4 py-3 flex justify-center gap-20 text-[13px] text-foreground/80">
          <Link
            href="#about"
            className="hover:text-foreground/70 transition-colors"
          >
            About
          </Link>
          <Link
            href="#food"
            className="hover:text-foreground/70 transition-colors"
          >
            Food
          </Link>
          <Link
            href="#travel"
            className="hover:text-foreground/70 transition-colors"
          >
            Travel
          </Link>
        </div>
      </nav>
      <div className="p-4 w-full sm:w-3xl mt-28 mx-auto">
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
        <section id="about" className="flex flex-col mt-24 scroll-mt-24">
          <p className=" text-foreground text-[15px]">About</p>
          <p className=" text-muted-foreground text-[15px] mt-0.5">
            I previously studied Computer Science at the University of Michigan,
            Ann Arbor. I enjoy trying new restaurants, playing golf, and
            watching Michigan Football.
          </p>
        </section>
        <section id="food" className="flex flex-col mt-24 scroll-mt-24">
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
