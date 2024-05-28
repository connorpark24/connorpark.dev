import Image from "next/image";
import Link from "next/link";
import headshot from "@/assets/headshot.png";
import Card from "@/components/Card";
import ContactIcons from "@/components/ContactIcons";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Image
        src={headshot}
        alt="Headshot"
        className="border-gray-100 rounded-full sm:w-40 sm:h-40 w-32 h-32 shadow-2xl mb-12 dark:shadow-blue-800 shadow-blue-200"
      />

      <div className="text-5xl font-medium mb-4 dark:text-white">
        Connor Park
      </div>
      <div className="text-lg mb-4 dark:text-white">
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
          <p>I am from Northern Virginia.</p>
          <p>Feel free to reach out!</p>
        </div>
        <div className="xl:w-2/5 flex flex-col gap-y-8">
          <Card>
            <p className="text-sm dark:text-white">Experience</p>
            <div className="flex flex-col gap-y-4">
              <div>
                <p className="text-sm dark:text-white mb-2">Stealth Startup</p>
                <div className="flex flex-row justify-between">
                  <p className="text-xs text-zinc-600 dark:text-zinc-400">
                    Software Engineer Intern
                  </p>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400">
                    Date
                  </p>
                </div>
              </div>
              <div>
                <p className="text-sm dark:text-white mb-2">
                  Spark RE Analytics LLC
                </p>
                <div className="flex flex-row justify-between">
                  <p className="text-xs text-zinc-600 dark:text-zinc-400">
                    Software Engineer Intern
                  </p>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400">
                    Date
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
