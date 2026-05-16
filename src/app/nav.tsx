"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export function Nav() {
  const [activeSection, setActiveSection] = useState<"food" | "travel" | null>(
    null
  );

  useEffect(() => {
    const update = () => {
      const foodEl = document.getElementById("food");
      const travelEl = document.getElementById("travel");
      if (!foodEl || !travelEl) return;

      const center = window.innerHeight / 2;
      const foodRect = foodEl.getBoundingClientRect();
      const travelRect = travelEl.getBoundingClientRect();

      let section: "food" | "travel" | null = null;
      if (foodRect.top <= center && foodRect.bottom >= center) {
        section = "food";
      } else if (travelRect.top <= center && travelRect.bottom >= center) {
        section = "travel";
      }
      setActiveSection(section);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <nav className="hidden md:flex fixed left-8 top-1/2 -translate-y-1/2 z-50 flex-col gap-3 text-[13px] w-40">
      <SectionLink href="#home" label="Home" active={false} />
      <SectionLink href="#writing" label="Writing" active={false} />
      <SectionLink href="#food" label="Food" active={activeSection === "food"} />
      <SectionLink
        href="#travel"
        label="Travel"
        active={activeSection === "travel"}
      />
    </nav>
  );
}

function SectionLink({
  href,
  label,
  active,
}: {
  href: string;
  label: string;
  active: boolean;
}) {
  return (
    <Link
      href={href}
      className={`hover:text-foreground transition-colors ${
        active ? "text-foreground" : "text-foreground/70"
      }`}
    >
      {label}
    </Link>
  );
}
