import Card from "@/components/Card";

export default function About() {
  return (
    <div className="flex flex-col w-full pt-16">
      <div className="text-5xl font-medium mb-8 dark:text-white">About</div>
      <div className="flex xl:flex-row flex-col gap-12">
        <div className="text-base flex flex-col gap-y-8 xl:w-3/5 leading-7 text-neutral-800">
          <div>
            <p className="dark:text-white mb-2">Classes Taken</p>
            <p className="text-zinc-600 dark:text-zinc-400">
              Programming and Introductory Data Structures, Data Structures and
              Algorithms, Intro to Computer Organization, Microprocessors and
              Toys
            </p>
          </div>
          <div>
            <p className="dark:text-white mb-2">Interests</p>
            <p className="text-zinc-600 dark:text-zinc-400">
              Programming and Introductory Data Structures, Data Structures and
              Algorithms, Intro to Computer Organization, Microprocessors and
              Toys
            </p>
          </div>
          <div>
            <p className="dark:text-white mb-2">
              Favorite Places I&apos;ve Traveled
            </p>
            <p className="text-zinc-600 dark:text-zinc-400">
              Seoul, South Korea; Tokyo, Japan; Los Angeles, California;
              Anchorage, Alaska
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
