import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex w-full pt-10 border-x-[1px] border-gray-200 dark:border-zinc-800 dark:text-gray-300">
      <div className="text-base font-self-center w-2/5 max-w-2xl flex flex-row items-center justify-around mx-auto">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/blog">Blog</Link>
      </div>
    </nav>
  );
}
