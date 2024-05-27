import {
  ComputerDesktopIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/outline";
import { ReactElement } from "react";

type Project = {
  link: string;
  title: string;
  description: string;
  icon: ReactElement;
};

const projectData: Project[] = [
  {
    link: "https://google.com",
    title: "UpRound Ventures Platform",
    description:
      "Pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus. Bibendum at varius vel pharetra vel.",
    icon: <ComputerDesktopIcon className="w-5 h-5 dark:text-white" />,
  },
  {
    link: "https://google.com",
    title: "Winston",
    description:
      "Pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus.",
    icon: <ComputerDesktopIcon className="w-5 h-5 dark:text-white" />,
  },
  {
    link: "https://google.com",
    title: "Startup Database",
    description:
      "Bibendum at varius vel pharetra vel. Vel fringilla est ullamcorper eget nulla facilisi.",
    icon: <ComputerDesktopIcon className="w-5 h-5 dark:text-white" />,
  },
  {
    link: "https://google.com",
    title: "Startup Database",
    description:
      "Bibendum at varius vel pharetra vel. Vel fringilla est ullamcorper eget nulla facilisi.",
    icon: <ComputerDesktopIcon className="w-5 h-5 dark:text-white" />,
  },
  {
    link: "https://google.com",
    title: "College Theme VSCode Extension",
    description: "Bibendum at varius vel pharetra vel.",
    icon: <AcademicCapIcon className="w-5 h-5 dark:text-white" />,
  },
];

export default projectData;
