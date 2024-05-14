import Image from "next/image";
import headshot from "@/assets/headshot.png";
import Card from "@/components/Card";
import ContactIcons from "@/components/ContactIcons";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Image
        src={headshot}
        alt="Headshot"
        className="border-gray-100 border-x-2 rounded-full w-40 h-40 shadow-xl mb-12"
      />

      <div className="text-5xl font-medium mb-4 dark:text-white">
        Connor Park
      </div>
      <div className="text-lg mb-4 dark:text-white">
        Student at the University of Michigan
      </div>

      <ContactIcons />

      <div className="flex flex-row">
        <div className="text-base flex flex-col gap-y-8 w-3/5 leading-7 text-neutral-600 dark:text-gray-300">
          <p>
            I&apos; m a rising sophomore studying computer science at the
            University of Michigan, also working toward minors in Mathematics
            and Business.
          </p>
          <p>
            Some of my interests include college football (Go Blue!), playing
            golf, cooking street food, and venture capital.
          </p>
          <p>Feel free to reach out!</p>
        </div>
        <div className="w-2/5 pl-12">
          <Card>
            <div className="text-sm">Experience</div>
            <div className="text-sm">Info</div>
          </Card>
        </div>
      </div>
    </div>
  );
}
