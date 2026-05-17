import Link from "next/link";
import Image from "next/image";
import { MapPin, Mail } from "lucide-react";
import { Nav } from "./nav";
import foodImages from "@/data/food.json";
import cookingImages from "@/data/cooking.json";
import travelImages from "@/data/travel.json";

// Preserved for commented-out sections below.
void cookingImages;
void travelImages;

type GalleryImage = {
  src: string;
  alt: string;
  title: string;
  description: string;
  date: string;
};

const writings: { title: string; date: string; href: string }[] = [];

function Gallery({ images }: { images: GalleryImage[] }) {
  return (
    <div className="grid grid-cols-2 gap-x-3 gap-y-8">
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
          <p className="text-foreground text-[15px] mt-2.5">{image.title}</p>
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
          <div className="flex items-center gap-3 text-muted-foreground text-[15px] mt-0.5">
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
          <p className=" text-foreground text-[15px] mb-1">About</p>
          <p className=" text-muted-foreground text-[15px] mt-0.5 mb-3">
            I previously studied Computer Science at the University of Michigan,
            Ann Arbor.
          </p>
          <p className=" text-muted-foreground text-[15px] mt-0.5 mb-3">
            In my free time, I enjoy trying new restaurants, playing golf, and
            watching Michigan Football.
          </p>
        </section>
        <section id="work" className="flex flex-col mt-12 scroll-mt-12">
          <p className=" text-foreground text-[15px] mb-1">Work</p>
          <p className=" text-muted-foreground text-[15px] mt-0.5 mb-3">
            I'm currently co-founder and CTO at{" "}
            <Link href="https://useskope.com">Skope [YC S25]</Link>, where we
            implement AI for law firms.
          </p>
          <p className=" text-muted-foreground text-[15px] mt-0.5 mb-3">
            I care most about designing simple interfaces, experiences, and
            systems.
          </p>
        </section>
        <section id="writing" className="flex flex-col mt-12 scroll-mt-12">
          <p className="text-foreground text-[15px] mb-1">Writing</p>
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
          <p className="text-foreground text-[15px] mb-3">Food</p>
          <Gallery images={foodImages} />
        </section>
        {/* <section id="cooking" className="flex flex-col mt-24 scroll-mt-24 mb-24">
          <p className="text-foreground text-[15px] mb-3">Cooking</p>
          <Gallery images={cookingImages} />
        </section> */}
        {/* <section id="travel" className="flex flex-col mt-24 scroll-mt-24 mb-24">
          <p className="text-foreground text-[15px] mb-3">Travel</p>
          <Gallery images={travelImages} />
        </section> */}
      </div>
    </div>
  );
}
