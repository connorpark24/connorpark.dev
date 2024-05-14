import HoverCard from "@/components/HoverCard";

export default function Blog() {
  return (
    <div className="flex flex-col w-full pt-16">
      <div className="text-5xl font-medium mb-4">Blog</div>
      <div className="text-lg mb-8">My thoughts.</div>

      <div className="grid grid-cols-2 gap-2 -mx-6 mb-72 ">
        <HoverCard>
          <div className="text-sm">Coming soon...</div>
          <div className="text-sm"></div>
        </HoverCard>
      </div>
    </div>
  );
}
