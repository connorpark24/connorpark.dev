import {
  ComputerDesktopIcon,
  AcademicCapIcon,
  PencilIcon,
  DocumentCheckIcon,
  CpuChipIcon,
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
    link: "https://github.com/connorpark24/upround-platform",
    title: "UpRound Ventures Platform",
    description:
      "A club platform for managing startup sourcing and deal flow for UpRound Ventures.",
    icon: <ComputerDesktopIcon className="w-5 h-5 dark:text-white" />,
  },
  {
    link: "https://github.com/connorpark24/winston",
    title: "Winston - AI Quiz Generator",
    description:
      "An online quiz generator leveraging AI to create custom practice questions from lectures.",
    icon: <PencilIcon className="w-5 h-5 dark:text-white" />,
  },
  {
    link: "https://marketplace.visualstudio.com/items?itemName=connorpark024.college-theme-generator",
    title: "College Theme VSCode Extension",
    description:
      "A VSCode extension providing theme configurations inspired by college colors.",
    icon: <AcademicCapIcon className="w-5 h-5 dark:text-white" />,
  },
  {
    link: "https://github.com/connorpark24/refresher-plugin",
    title: "Obsidian Notes Refresher",
    description:
      "Plugin that uses AI to provide summaries on old notes in vault.",
    icon: <DocumentCheckIcon className="w-5 h-5 dark:text-white" />,
  },
  {
    link: "https://github.com/connorpark24/personal-website",
    title: "Personal Website",
    description: "This website and blog. ",
    icon: <CpuChipIcon className="w-5 h-5 dark:text-white" />,
  },
];

export default projectData;
