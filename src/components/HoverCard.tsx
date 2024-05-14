import { ReactNode } from "react";
import Link from "next/link";

interface HoverCardProps {
  children: ReactNode;
  link: string;
}

export default function HoverCard({ children, link }: HoverCardProps) {
  return (
    <Link
      href={link}
      className="p-6 rounded-lg flex flex-col gap-4 transform transition-transform duration-200 hover:scale-105 hover:bg-gray-50"
    >
      {children}
    </Link>
  );
}
