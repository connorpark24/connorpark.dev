import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex py-10">
      <div className="text-sm font-self-center w-96 max-w-2xl flex flex-row items-center justify-around mx-auto dark:text-white">
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
