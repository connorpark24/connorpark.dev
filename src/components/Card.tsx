import { ReactNode } from "react";

export default function Card({ children }: { children: ReactNode }) {
  return (
    <div className="p-6 border-[1px] border-gray-200 rounded-lg flex flex-col gap-4">
      {children}
    </div>
  );
}
