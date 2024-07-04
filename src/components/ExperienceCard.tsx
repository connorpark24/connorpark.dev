import Card from "@/components/Card";

export default function ExperienceCard() {
  return (
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
              May 2024 -{" "}
            </p>
          </div>
        </div>
        <div>
          <p className="text-sm dark:text-white mb-2">Spark RE Analytics LLC</p>
          <div className="flex flex-row justify-between">
            <p className="text-xs text-zinc-600 dark:text-zinc-400">
              Software Engineer Intern
            </p>
            <p className="text-xs text-zinc-600 dark:text-zinc-400">
              June 2023 - May 2024
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
}
