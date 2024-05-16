import HoverCard from "@/components/HoverCard";

export default function Blog() {
  return (
    <div className="flex flex-col w-full pt-16">
      <div className="text-5xl font-medium mb-4 dark:text-white">Blog</div>
      <div className="text-lg mb-8 dark:text-white">My thoughts.</div>

      <div className="grid lg:grid-cols-2 gap-2 -mx-6 mb-72">
        <HoverCard link="">
          <div className="text-sm dark:text-white">Coming soon...</div>
          <div className="text-sm"></div>
        </HoverCard>
      </div>
    </div>
  );
}
