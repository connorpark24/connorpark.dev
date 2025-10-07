import Link from "next/link";
import Image from "next/image";
export default function Home() {
  return (
    <div className="h-screen w-screen bg-background flex flex-col items-center">
      <div className="p-4 w-full sm:w-3xl mt-28 mx-auto">
        <h1 className="text-2xl tracking-tight font-medium">Connor Park</h1>
        <p className=" text-muted-foreground mt-2">
          Co-Founder, CTO @{" "}
          <Link href="https://useskope.com">Skope [YC S25]</Link>.
        </p>
        <div className="flex flex-row gap-x-2 mt-2 text-sm text-muted-foreground">
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
        <div className="flex flex-col mt-12">
          <p className=" text-foreground ">About</p>
          <p className=" text-muted-foreground mt-0.5">
            I previously studied Computer Science at the University of Michigan,
            Ann Arbor. I enjoy trying new foods and watching Michigan Football.
          </p>
        </div>
        <div className="flex flex-col mt-12">
          <p className=" text-foreground ">Writing</p>
          <p className=" text-muted-foreground mt-0.5">Coming soon</p>
        </div>
        <div className="flex flex-col mt-32 mb-24">
          <div className="grid grid-cols-12 gap-2">
            {/* ROW 1 */}
            <div className="col-span-3  h-24 sm:h-32 lg:h-40 overflow-hidden rounded-md">
              <Image
                src="/gallery/ollie-tongue.jpeg"
                alt="ollie-tongue"
                className="w-full h-full object-cover"
                width={500}
                height={500}
              />
            </div>

            <div className="col-span-5 h-24 sm:h-32 lg:h-40 overflow-hidden rounded-md">
              <Image
                src="/gallery/rosebowl.jpeg"
                alt="rosebowl"
                className="w-full h-full object-cover"
                width={500}
                height={500}
              />
            </div>

            <div className="col-span-4  h-24 sm:h-32 lg:h-40  overflow-hidden rounded-md">
              <Image
                src="/gallery/yc-s25.jpeg"
                alt="yc-s25"
                className="w-full h-full object-cover"
                width={500}
                height={500}
              />
            </div>
            {/* ROW 2 */}
            <div className="col-span-3 h-24 sm:h-32 lg:h-40  overflow-hidden rounded-md">
              <Image
                src="/gallery/daeho.jpeg"
                alt="daeho"
                className="w-full h-full object-cover"
                width={500}
                height={500}
              />
            </div>

            <div className="col-span-3 h-24 sm:h-32 lg:h-40  overflow-hidden rounded-md">
              <Image
                src="/gallery/ribeyes.jpeg"
                alt="ribeyes"
                className="w-full h-full object-cover"
                width={500}
                height={500}
              />
            </div>

            <div className="col-span-3 h-24 sm:h-32 lg:h-40  overflow-hidden rounded-md">
              <Image
                src="/gallery/udon.jpeg"
                alt="udon"
                className="w-full h-full object-cover"
                width={500}
                height={500}
              />
            </div>
            <div className="col-span-3 h-24 sm:h-32 lg:h-40  overflow-hidden rounded-md">
              <Image
                src="/gallery/tsujiki.jpeg"
                alt="tsujiki"
                className="w-full h-full object-cover"
                width={500}
                height={500}
              />
            </div>

            {/* ROW 3 */}
            <div className="col-span-5  h-24 sm:h-32 lg:h-40  overflow-hidden rounded-md">
              <Image
                src="/gallery/alaska.jpeg"
                alt="alaska"
                className="w-full h-full object-cover"
                width={500}
                height={500}
              />
            </div>

            <div className="col-span-4  h-24 sm:h-32 lg:h-40  overflow-hidden rounded-md">
              <Image
                src="/gallery/florence.jpeg"
                alt="florence"
                className="w-full h-full object-cover"
                width={500}
                height={500}
              />
            </div>

            <div className="col-span-3 h-24 sm:h-32 lg:h-40  overflow-hidden rounded-md">
              <Image
                src="/gallery/costarica-tree.jpeg"
                alt="costarica-tree"
                className="w-full h-full object-cover"
                width={500}
                height={500}
              />
            </div>

            {/* ROW 4 */}
            <div className="col-span-3 h-24 sm:h-32 lg:h-40  overflow-hidden rounded-md">
              <Image
                src="/gallery/rome-pasta.jpeg"
                alt="rome-pasta"
                className="w-full h-full object-cover"
                width={500}
                height={500}
              />
            </div>
            <div className="col-span-3 h-24 sm:h-32 lg:h-40  overflow-hidden rounded-md">
              <Image
                src="/gallery/republique.jpeg"
                alt="republique"
                className="w-full h-full object-cover"
                width={500}
                height={500}
              />
            </div>
            <div className="col-span-3 h-24 sm:h-32 lg:h-40  overflow-hidden rounded-md">
              <Image
                src="/gallery/nubiani.jpeg"
                alt="nubiani"
                className="w-full h-full object-cover"
                width={500}
                height={500}
              />
            </div>
            <div className="col-span-3 h-24 sm:h-32 lg:h-40  overflow-hidden rounded-md">
              <Image
                src="/gallery/lindustrie.jpeg"
                alt="lindustrie"
                className="w-full h-full object-cover"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
