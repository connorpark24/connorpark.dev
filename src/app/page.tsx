import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen w-screen bg-background flex flex-col items-center">
      <div className="p-4 w-full sm:w-3xl mt-28 mx-auto">
        <h1 className="text-2xl tracking-tight font-medium">Connor Park</h1>
        <p className=" text-muted-foreground mt-1">
          Co-Founder, CTO @{" "}
          <Link href="https://useskope.com">Skope [YC S25]</Link>.
        </p>
        <div className="flex flex-col mt-16">
          <p className=" text-foreground ">About</p>
          <p className=" text-muted-foreground mt-0.5">
            I previously studied Computer Science at the University of Michigan,
            Ann Arbor. I enjoy trying new foods and watching Michigan Football.
          </p>
        </div>
        <div className="flex flex-col mt-16">
          <p className=" text-foreground ">Writing</p>
          <p className=" text-muted-foreground mt-0.5">Coming soon</p>
        </div>
        <div className="flex flex-row gap-x-4 mt-48 text-sm text-muted-foreground">
          <Link
            href="https://github.com/connorpark24"
            className="hover:text-muted-foreground/90"
          >
            GitHub
          </Link>
          <Link
            href="https://linkedin.com/in/connor-park24"
            className="hover:text-muted-foreground/90"
          >
            LinkedIn
          </Link>
        </div>
      </div>
    </div>
  );
}
