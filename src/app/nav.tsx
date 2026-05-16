import Link from "next/link";

const links = [
  { href: "#home", label: "Home" },
  { href: "#writing", label: "Writing" },
  { href: "#food", label: "Food" },
  { href: "#travel", label: "Travel" },
];

export function Nav() {
  return (
    <nav className="hidden md:flex fixed left-8 top-1/2 -translate-y-1/2 z-50 flex-col gap-3 text-[13px] text-foreground/80">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="hover:text-foreground transition-colors"
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
