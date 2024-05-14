import { ReactNode } from "react";

export default function HoverCard({ children }: { children: ReactNode }) {
  return (
    <div className="p-6 rounded-lg flex flex-col gap-4 transform transition-transform duration-200 hover:scale-105">
      {children}
    </div>
  );
}
