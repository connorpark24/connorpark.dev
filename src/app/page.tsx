import Image from "next/image";
import Link from "next/link";
import headshot from "@/assets/headshot.png";
import ContactIcons from "@/components/ContactIcons";
import ExperienceCard from "@/components/ExperienceCard";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <div className="relative inline-block dark:bg-neutral-900 bg-white border-gray-100 rounded-full sm:w-40 sm:h-40 w-32 h-32 shadow-2xl mb-12 dark:shadow-blue-600 shadow-blue-200">
        <Image
          src={headshot}
          alt="Headshot"
          className="rounded-full h-full w-full"
        />
      </div>

      <div className="text-5xl font-medium mb-4 dark:text-white tracking-tight">
        Connor Park
      </div>
      <div className="text-lg mb-4 dark:text-white ">
        Student at the University of Michigan
      </div>

      <ContactIcons />

      <div className="flex xl:flex-row flex-col gap-12">
        <div className="text-base flex flex-col gap-y-8 xl:w-3/5 leading-7 text-zinc-600 dark:text-zinc-400">
          <p>
            I&apos;m a rising sophomore studying Computer Science at the
            University of Michigan, also working toward minors in Mathematics
            and Business. At school, I&apos;m involved with{" "}
            <Link className="font-semibold" href="https://v1michigan.com/">
              V1 Michigan
            </Link>{" "}
            and{" "}
            <Link className="font-semibold" href="https://www.upround.vc/">
              UpRound Ventures.
            </Link>
          </p>
          <p>Feel free to reach out!</p>
        </div>
        <div className="xl:w-2/5 flex flex-col gap-y-8">
          <ExperienceCard />
        </div>
      </div>
    </div>
  );
}
