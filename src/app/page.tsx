import Image from "next/image";
import Link from "next/link";
import headshot from "@/assets/headshot.png";
import ContactIcons from "@/components/ContactIcons";
import ExperienceCard from "@/components/ExperienceCard";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <div className="text-5xl mb-4 tracking-tight">Connor Park</div>
      <div className="text-xl text-muted-foreground mb-4 ">
        Student at the University of Michigan
      </div>

      <ContactIcons />

      <p className="text-lg text-muted-foreground mt-24">Building Skope</p>
    </div>
  );
}
