import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex w-full pt-10 border-x-[1px] border-gray-200 dark:border-zinc-800 dark:text-gray-300">
      <div className="text-sm font-self-center md:w-1/3 max-w-2xl flex flex-row items-center justify-around mx-auto">
        <Link
          className="transform transition-transform duration-100 hover:scale-110"
          href="/"
        >
          Home
        </Link>
        <Link
          className="transform transition-transform duration-100 hover:scale-110"
          href="/about"
        >
          About
        </Link>
        <Link
          className="transform transition-transform duration-100 hover:scale-110"
          href="/projects"
        >
          Projects
        </Link>
        <Link
          className="transform transition-transform duration-100 hover:scale-110"
          href="/blog"
        >
          Blog
        </Link>
      </div>
    </nav>
  );
}
