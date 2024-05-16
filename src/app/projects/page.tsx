import HoverCard from "@/components/HoverCard";
import { ComputerDesktopIcon } from "@heroicons/react/24/outline";

const projectData = [
  {
    link: "https://google.com",
    title: "UpRound Platform",
    description:
      "Pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus. Bibendum at varius vel pharetra vel.",
    icon: <ComputerDesktopIcon className="w-5 h-5 dark:text-white" />,
  },
  {
    link: "https://google.com",
    title: "Winston Quiz Generator",
    description:
      "Pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus.",
    icon: <ComputerDesktopIcon className="w-5 h-5 dark:text-white" />,
  },
  {
    link: "https://google.com",
    title: "Basketball Shot Tracker",
    description:
      "Pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus. Bibendum at varius vel pharetra vel.",
    icon: <ComputerDesktopIcon className="w-5 h-5 dark:text-white" />,
  },
  {
    link: "https://google.com",
    title: "Startup Database",
    description:
      "Bibendum at varius vel pharetra vel. Vel fringilla est ullamcorper eget nulla facilisi.",
    icon: <ComputerDesktopIcon className="w-5 h-5 dark:text-white" />,
  },
];

export default function Projects() {
  return (
    <div className="flex flex-col w-full pt-16">
      <div className="text-5xl font-medium mb-4 dark:text-white">Projects</div>
      <div className="text-lg mb-8 dark:text-white">I like to build.</div>

      <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-2 -mx-6 mb-10">
        {projectData.map((project, index) => (
          <HoverCard key={index} link={project.link}>
            <div className="flex flex-row gap-x-4 items-center">
              <div className="rounded-full shadow-md bg-white dark:bg-zinc-900 dark:border-zinc-800 border-[1px] border-gray-200 w-10 h-10 flex items-center justify-around">
                {project.icon}
              </div>
              <span className="text-sm  dark:text-white">{project.title}</span>
            </div>
            <div className="text-sm leading-6 text-neutral-600 dark:text-zinc-400">
              {project.description}
            </div>
          </HoverCard>
        ))}
      </div>
    </div>
  );
}
