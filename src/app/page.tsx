import Link from "next/link";
import Image from "next/image";

const galleryImages = [
  {
    src: "/gallery/ollie-tongue.jpeg",
    alt: "ollie-tongue",
    colSpan: 3,
    message: "Ollie",
  },
  {
    src: "/gallery/rosebowl.jpeg",
    alt: "rosebowl",
    colSpan: 5,
    message: "Rose Bowl 2024 - Pasadena, CA",
  },
  { src: "/gallery/yc-s25.jpeg", alt: "yc-s25", colSpan: 4, message: "YC S25" },
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
  {
    src: "/gallery/rome-pasta.jpeg",
    alt: "rome-pasta",
    colSpan: 3,
    message: "Rome, Italy",
  },
  {
    src: "/gallery/republique.jpeg",
    alt: "republique",
    colSpan: 3,
    message: "Los Angeles, CA",
  },
  {
    src: "/gallery/nubiani.jpeg",
    alt: "nubiani",
    colSpan: 3,
    message: "New York City, NY",
  },
  {
    src: "/gallery/lindustrie.jpeg",
    alt: "lindustrie",
    colSpan: 3,
    message: "New York City, NY",
  },
];

export default function Home() {
  return (
    <div className="h-screen w-screen bg-background flex flex-col items-center">
      <div className="p-4 w-full sm:w-3xl mt-28 mx-auto">
        <h1 className="text-2xl font-medium">Connor Park</h1>
        <p className=" text-muted-foreground mt-2">
          Co-Founder, CTO @{" "}
          <Link href="https://useskope.com">Skope [YC S25]</Link>.
        </p>
        <div className="flex flex-row gap-x-2 mt-2 text-sm text-muted-foreground">
          <Link
            href="https://github.com/connorpark24"
            className="hover:text-muted-foreground/90"
          >
            GitHub
          </Link>
          <Link
            href="https://linkedin.com/in/connor-park24"
            className="hover:text-muted-foreground/90"
          >
            LinkedIn
          </Link>
        </div>
        <div className="flex flex-col mt-12">
          <p className=" text-foreground ">About</p>
          <p className=" text-muted-foreground mt-0.5">
            I previously studied Computer Science at the University of Michigan,
            Ann Arbor. I enjoy trying new restaurants, playing golf, and
            watching Michigan Football.
          </p>
        </div>
        <div className="flex flex-col mt-12">
          <p className=" text-foreground ">Writing</p>
          <p className=" text-muted-foreground mt-0.5">Coming soon</p>
        </div>
        <div className="flex flex-col mt-24 sm:mt-56 mb-24">
          <div className="grid grid-cols-12 gap-2">
            {galleryImages.map((image) => {
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
        </div>
      </div>
    </div>
  );
}
