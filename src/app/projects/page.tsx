import HoverCard from "@/components/HoverCard";

export default function Projects() {
  return (
    <div className="flex flex-col w-full pt-16">
      <div className="text-5xl font-medium mb-4">Projects</div>
      <div className="text-lg mb-8">I like to build.</div>

      <div className="grid grid-cols-3 gap-2 -mx-6 mb-36">
        <HoverCard>
          <div className="text-sm">UpRound Platform</div>
          <div className="text-sm">
            Pellentesque pulvinar pellentesque habitant morbi tristique senectus
            et netus. Bibendum at varius vel pharetra vel.
          </div>
        </HoverCard>
        <HoverCard>
          <div className="text-sm">Title</div>
          <div className="text-sm">
            Pellentesque pulvinar pellentesque habitant morbi tristique senectus
            et netus.
          </div>
        </HoverCard>
        <HoverCard>
          <div className="text-sm">Title</div>
          <div className="text-sm">
            Pellentesque pulvinar pellentesque habitant morbi tristique senectus
            et netus. Bibendum at varius vel pharetra vel.
          </div>
        </HoverCard>
        <HoverCard>
          <div className="text-sm">Title</div>
          <div className="text-sm">
            Bibendum at varius vel pharetra vel. Vel fringilla est ullamcorper
            eget nulla facilisi.
          </div>
        </HoverCard>
      </div>
    </div>
  );
}
